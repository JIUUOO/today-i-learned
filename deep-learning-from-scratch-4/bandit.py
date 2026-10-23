import numpy as np

class Bandit:
    def __init__(self, arms=10):  # arms: 술롯 머신 개수
        self.rates = np.random.rand(arms)  # arms 개의 [0, 1) 원소 배열

    def play(self, arm):
        rate = self.rates[arm]
        if rate > np.random.rand():
            return 1
        else:
            return 0


bandit = Bandit()
Qs = np.zeros(10)  # 각 슬롯머신의 가치 추정치
ns = np.zeros(10)  # 각 슬롯머신의 플레이 횟수 배열

for n in range(10):
    action = np.random.randint(0, 10)  # 0~9 index 중 슬롯머신 선택
    reward = bandit.play(action)

    ns[action] += 1  # 해당 슬롯머신 플레이 횟수 증가
    Qs[action] += (reward - Qs[action]) / ns[action]
    print(Qs)
