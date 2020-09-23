const express = require("express");

const speedTest = require('speedtest-net');

const functionSpeed = () => {
  return new Promise((resolve, reject) => {
   resolve(speedTest())
    //reject("Rejeitada")
  })
}


module.exports = functionSpeed