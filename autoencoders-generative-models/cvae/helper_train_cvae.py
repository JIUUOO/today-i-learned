import time

import torch
import torch.nn.functional as F


def train_cvae_v1(
    num_epochs,
    model,
    optimizer,
    device,
    train_loader,
    loss_fn=None,
    logging_interval=100,
    reconstruction_term_weight=1,
    save_model=None,
):
    """Train a label-conditioned VAE using reconstruction and KL losses."""
    log_dict = {
        "train_combined_loss_per_batch": [],
        "train_reconstruction_loss_per_batch": [],
        "train_kl_loss_per_batch": [],
    }

    if loss_fn is None:
        loss_fn = F.mse_loss

    start_time = time.time()

    for epoch in range(num_epochs):
        model.train()

        for batch_idx, (features, targets) in enumerate(train_loader):
            features = features.to(device)
            targets = targets.to(device)

            encoded, z_mean, z_log_var, decoded = model(features, targets)

            kl_div = -0.5 * torch.sum(
                1 + z_log_var - z_mean.pow(2) - torch.exp(z_log_var),
                dim=1,
            ).mean()

            batch_size = features.size(0)
            pixelwise = loss_fn(decoded, features, reduction="none")
            pixelwise = pixelwise.view(batch_size, -1).sum(dim=1).mean()

            loss = reconstruction_term_weight * pixelwise + kl_div

            optimizer.zero_grad()
            loss.backward()
            optimizer.step()

            log_dict["train_combined_loss_per_batch"].append(loss.item())
            log_dict["train_reconstruction_loss_per_batch"].append(pixelwise.item())
            log_dict["train_kl_loss_per_batch"].append(kl_div.item())

            if not batch_idx % logging_interval:
                print(
                    "Epoch: %03d/%03d | Batch %04d/%04d | Loss: %.4f"
                    % (
                        epoch + 1,
                        num_epochs,
                        batch_idx,
                        len(train_loader),
                        loss.item(),
                    )
                )

        print("Time elapsed: %.2f min" % ((time.time() - start_time) / 60))

    print("Total Training Time: %.2f min" % ((time.time() - start_time) / 60))

    if save_model is not None:
        torch.save(model.state_dict(), save_model)

    return log_dict
