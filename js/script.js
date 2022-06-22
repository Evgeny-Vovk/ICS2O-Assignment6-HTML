// Copyright (c) 2022 Evgeny All rights reserved
//
// Created by: Evgeny
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment6-HTML/sw.js", {
    scope: "/ICS2O-Assignment6-HTML/",
  });
}

/**
 * Get API info.
 */
const getImage = async (URLAddress) => {
try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)
    document.getElementById("image").innerHTML =
      '<img src=' + 
      jsonData.image + 
      ' alt="API fox image" ' +
      ' height = "450" width = "800" ' +
      '>'
  } catch (err) {
    console.log(err)
  }
};

getImage("https://forza-api.tk/");
