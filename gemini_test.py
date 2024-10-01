import google.generativeai as genai
import os

os.environ["API_KEY"] = 'API KEY HERE'
genai.configure(api_key=os.environ["API_KEY"])

myfile = genai.upload_file("images/" + input("Filename: "))
# print(f"{myfile=}")

model = genai.GenerativeModel("gemini-1.5-flash-latest")
result = model.generate_content(
    [myfile, "\n\n", "Can you tell me about the instruments in this photo?"]
)
print(result.text)