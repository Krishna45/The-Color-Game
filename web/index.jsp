<%-- 
    Document   : index
    Created on : 24 Jul, 2020, 6:33:46 PM
    Author     : Hp
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Color Game</title>
        <link rel="stylesheet" type="text/css" href="colorgame.css">
    </head>
    <body>
        <h1>The Great<br> 
            <span id="colorDisplay">RGB</span> <br>
            Color Game</h1>
        <div id="stripe">
            <button id="reset">New Color</button>
            <span id="message"></span>
            <button id="easyBtn">Easy</button>
            <button id="hardBtn" class="selected">Hard</button>
        </div>
        <div id="container">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        </div>
        <script type="text/javascript" src="colorgame.js"></script>
    </body>
</html>
