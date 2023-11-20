/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const container = document.querySelector(".container");
const pintaSuperior = document.querySelector(".pintaSuperior");
const pintaInferior = document.querySelector(".pintaInferior");
const numero = document.querySelector(".numero");
window.onload = function() {
  //write your code here
  let pintas = ["♦", "♥", "♠", "♣"];
  let numeros = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let pintasRandon = Math.floor(Math.random() * pintas.length);
  let numerosRandon = Math.floor(Math.random() * numeros.length);
  pintaSuperior.innerHTML = pintas[pintasRandon];
  pintaInferior.innerHTML = pintas[pintasRandon];
  numero.innerHTML = numeros[numerosRandon];
};
