from flask import Flask, render_template, request, redirect, url_for

# Setup Flask and login
app = Flask(__name__)

@app.route('/')
@app.route('/index')
def home():
    """Show the Home page."""
    return render_template('home_page.html')

@app.route('/links')
@app.route('/resources')
def resources():
    """Show the resources page."""
    return render_template('resources_page.html')

@app.route('/join')
def join():
    """Show the Join page."""
    return render_template('join_page.html')

@app.route('/about')
@app.route('/contact')
def about():
    """Show the About page."""
    return render_template('about_page.html')

@app.route('/sponsors')
def sponsors():
    """Show the Sponsors page."""
    return render_template('sponsors_page.html')

@app.route('/saftey')
def safety():
    """Show the Safety page."""
    return render_template('safety_page.html')

