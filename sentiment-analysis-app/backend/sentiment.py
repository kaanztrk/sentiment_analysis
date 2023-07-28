from transformers import pipeline
from transformers import AutoTokenizer, AutoModelForSequenceClassification


def sentiment_analysis(sentence):
    model_name = "distilbert-base-uncased-finetuned-sst-2-english"
    model = AutoModelForSequenceClassification.from_pretrained(model_name)
    tokenizer = AutoTokenizer.from_pretrained(model_name)

    classifier = pipeline("sentiment-analysis",
                          model=model, tokenizer=tokenizer)

    res = classifier(sentence)

    output = res[0]["label"]

    return output
