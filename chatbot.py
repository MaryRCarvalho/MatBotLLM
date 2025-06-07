import torch
from transformers import pipeline

model_id = "meta-llama/Llama-3.2-1B-Instruct"

def getBotResponse (userInput):

    print ("1")
    
    messages = [
    {"role": "system", "content": "You are a chat meant to help users with Math."},
    {"role": "user", "content": userInput},
    ]

    print ("2")

    pipe = pipeline (
        "text-generation",
        model=model_id,
        torch_dtype=torch.bfloat16,
        device_map="auto",)
    
    print ("3")
    
    outputs = pipe(
        messages,
        max_new_tokens=64,
    )
    
    return (outputs[0]["generated_text"][-1]["content"])
