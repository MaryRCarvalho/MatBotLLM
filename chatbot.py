import langchain
from langchain import Chains

# Crie uma instância do modelo Llama 3
model = langchain.Model.load("llama:3")

# Crie uma cadeia de operações para interagir com o modelo
chain = Chain(model=model)

# Defina a função handle_conversation para lidar com as conversas
def handle_conversation(context, question):
    # Gere uma resposta utilizando o modelo Llama
    response = chain.run(question)

    # Adicione a resposta ao contexto da conversa
    context += f"Bot: {response}\n"

    return context

# Defina a função main para iniciar a conversa
def main():
    context = ""
    while True:
        user_input = input("Usuário: ")

        if user_input.lower() == "exit":
            break

        question = user_input
        context = handle_conversation(context, question)

    print(context)

if __name__ == "__main__":
    main()