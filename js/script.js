// Copyright (c) 2025 BrandonBCode All rights reserved
//
// Created by: BrandonBCode
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the celsius from fahrenheit
 */
function calculateOrder() {
    // Takes the selection from HTML to JS
    let medBurger = document.getElementById("medBurger");
    let larBurger = document.getElementById("larBurger");

    let Lettuce = document.getElementById("Lettuce");

    let Tomato = document.getElementById("Tomato");

    let Pickle = document.getElementById("Pickle");

    let Onion = document.getElementById("Onion");

    let Bacon = document.getElementById("Bacon");

    let Cheese = document.getElementById("Cheese");


    //Constants for prices and tax
    const TAX = 0.13;
    const LARGE_COST = 9.54;
    const MEDIUM_COST = 8.31;
    const TOPPING1_COST = 0.45;
    const TOPPING2_COST = 0.65;

    let total = 0;

    // If statements for Burger Sizes
    if (larBurger.value === "yes") {
        total += LARGE_COST;
    } else if (medBurger.value === "yes") {
        total += MEDIUM_COST;
    }
      
    const topping1 = [Lettuce,  Tomato,  Pickle, Onion];
    topping1.forEach(item => {
        if (item.value === "yes") {
            total += TOPPING1_COST;
        }
    });

    const topping2 = [Bacon, Cheese];
    topping2.forEach(item => {
        if (item.value === "yes") {
            total += TOPPING2_COST;
        }
    });

  
    // Tax Calculations
    let tax = total * TAX;
    let finalTotal = total + tax;


  // output that displays subtotal, tax and final total breakdown to the user
    document.getElementById("outputSubTotal").innerHTML = "Your Subtotal is: $" + total.toFixed(2);
    document.getElementById("outputTax").innerHTML = "Your Tax is: $" + tax.toFixed(2);
    document.getElementById("outputTotal").innerHTML = "Your Final total is: $" + finalTotal.toFixed(2);
}