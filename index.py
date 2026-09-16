from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/contact", methods=["POST"])
def contact():

    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")

    print("========== NEW MESSAGE ==========")
    print("Name:", name)
    print("Email:", email)
    print("Message:", message)
    print("=================================")

    return """
    <h2 style='font-family:Arial;text-align:center;margin-top:80px;'>
    ✅ Thank You! Your message has been sent successfully.
    <br><br>
    <a href="/">Go Back</a>
    </h2>
    """


if __name__ == "__main__":
    app.run(debug=True)