from music import app
from flask import Flask, flash, redirect, render_template, request, url_for

@app.route('/')
def index():
    flash('It\'s just a test flash message!')
    return render_template('index.html')