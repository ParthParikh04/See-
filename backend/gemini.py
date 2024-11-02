import google.generativeai as genai
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv()
genai.configure(api_key=os.environ["GEMINI_API_KEY"])

def process_query_file(file, query):
    model = genai.GenerativeModel("gemini-1.5-flash-latest")
    result = model.generate_content(
        [file, "\n\n", query]
    )

    return result.text

def process_query(filename, query):
    myfile = genai.upload_file(filename)

    model = genai.GenerativeModel("gemini-1.5-flash-latest")
    result = model.generate_content(
        [myfile, "\n\n", query]
    )

    return result.text
