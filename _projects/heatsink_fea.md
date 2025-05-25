---
layout: page
title: RPi Heatsink Thermal Analysis
description: Designing a heatsink for a Rasperry Pi and validating its performance via thermal FEA and CFD
img: assets/img/Ansys Heatsink.png
importance: 3
category: work
---

<div style="text-align: justify;">
In this project, I designed and analyzed a custom heat sink for a Raspberry Pi to study how geometric variations affect thermal performance. Using temperature rise data from the Raspberry Pi chip, I calculated the corresponding heat flux to define realistic boundary conditions at the heat sink base. The CAD model and engineering drawings were developed in SolidWorks, and parametric studies were performed by varying fin height, spacing, and count. Both steady-state and transient thermal simulations were conducted in ANSYS, followed by CFD simulations in SolidWorks Flow Simulation to evaluate convective effects. The analysis identified locally optimal configurations for each geometric parameter, providing insight into effective passive cooling strategies for compact electronics.
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Heatsink Pic.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Heatsink 6 x 0.5mm - 5mm Drawing.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

<div class="row justify-content-sm-center">
    <div class="row">
        <div class="col-sm mt-3 mt-md-0">
            {% include video.liquid path="assets/img/Heatsink Ansys Animation.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
        </div>
    </div>
</div>
<div class="row justify-content-sm-center">
    <div class="row">
        <div class="col-sm mt-3 mt-md-0">
            {% include video.liquid path="assets/img/Heatsink Ansys Animation Heat Flux.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
        </div>
    </div>
</div>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Heatsink CFD Surface Plot.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Heatsink CFD Cut Plot.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="row justify-content-sm-center">
    <div class="row">
        <div class="col-sm mt-3 mt-md-0">
            {% include video.liquid path="assets/img/Heatsink CFD Cut Animation.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
        </div>
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Increasing Fin Height Graph.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Increasing Fin Thickness.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Increasing Number of Fins.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Increasing Fin Height CFD.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Increasing Fin Thickness CFD.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Increasing Number of Fins CFD.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

