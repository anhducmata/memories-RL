from stable_baselines3 import PPO
from stable_baselines3.common.env_util import make_vec_env
from memory_env import MemoryEnv
import json

with open('memories.json') as f:
    memory_data = json.load(f)

env = MemoryEnv(memory_data)
env = make_vec_env(lambda: env, n_envs=1)

model = PPO('MlpPolicy', env, verbose=1)
model.learn(total_timesteps=10000)
model.save("models/memory_model")

model = PPO.load("models/memory_model")
