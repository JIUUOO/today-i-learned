# Repository Guidelines

## Scope

These instructions apply to the whole repository. `AGENTS.md` is the standard
agent instruction file for Codex-style coding agents.

Use the top-level topic directory as the commit scope when possible, for example:

- `autoencoders-generative-models`
- `deep-learning-from-scratch-1`
- `complete-python-3-bootcamp`
- `ros2-for-beginners`
- `repo` for repository-wide changes

## Commit Messages

Use Conventional Commits:

```text
type(scope): summary
```

Common types:

- `feat`: new lesson, notebook, experiment, or user-facing behavior
- `fix`: bug fix or corrected learning/training setup
- `docs`: documentation only
- `refactor`: structure/name cleanup without meaningful behavior change
- `chore`: repo maintenance, config, or metadata

Examples:

```text
feat(autoencoders-generative-models): add MNIST undercomplete convolutional AE
feat(autoencoders-generative-models): add PCA and t-SNE latent visualizations
fix(autoencoders-generative-models): correct MNIST AE normalization mismatch
refactor(autoencoders-generative-models): rename MNIST AE notebook
docs(repo): add agent guidelines
chore(repo): update commit message rules
```

Keep the subject short, concrete, and imperative. Avoid vague messages such as
`update`, `fix stuff`, or `misc changes`.

If useful, add a blank line after the subject and write any number of body
bullets for context:

```text
feat(autoencoders-generative-models): add PCA and t-SNE latent visualizations

- Filter latent plots by selected digit labels
- Keep CPU fallback for CUDA unavailable environments
- Sample a fixed subset for reproducible t-SNE plots
```

## Working Guidelines

- Follow the style already present in the topic directory.
- Keep changes focused on the requested lesson or experiment.
- Put editable notebook configuration values near the relevant section top.
- Preserve user work and notebook outputs unless asked to clear them.
- Do not revert unrelated local changes.
- Mention any checks that could not be run.
