---
chapter: 8
type: concept
status: reviewing
difficulty: high
last-reviewed: 
mastery: 1
summary: "Operating principles of Air Gages, Capacitive Sensors, and Laser Metrology for sub-micron precision"
equations:
  - name: "Capacitance"
    latex: "C = \\frac{\\epsilon_0 \\cdot A}{d}"
    notes: "e0 = media constant, A = area, d = air gap"
---

# High-Precision Non-Contact Sensors

#mmet380 #ch8 #concept

## In Plain English

Sometimes, touching a part with a metal probe is too slow or might damage a delicate surface. In these cases, we use sensors that "feel" the part without touching it. **Air Gages** blow air at the part and measure the pressure change to find the size. **Capacitive Sensors** use electricity to "sense" how far away a metal part is (by measuring the air gap). **Lasers** are the most versatile—they bounce a beam of light off the part and use the reflection time or angle to calculate the exact distance.

## 1. Air Gages
- **Principle:** Compressed air is directed through a probe. As the gap between the probe and the part changes, the air pressure/flow changes.
- **Best for:** Extremely precise measurements of inside and outside diameters (holes and shafts).
- **Benefit:** Highly repeatable and fast.

## 2. Capacitive (Proximity) Sensors
- **Principle:** Measures the change in electrical capacitance between a probe and a conductive surface.
- **Formula:** $C = \frac{\epsilon_0 \cdot A}{d}$ (Capacitance increases as the gap $d$ gets smaller).
- **Best for:** Measuring tiny deviations in roundness or runout on moving parts.

## 3. Laser Metrology
- **Laser Displacement:** A pulsed beam reflects off the surface to calculate distance.
- **Laser Micrometer:** Measures the shadow of a part passing through a laser "curtain" to find diameters and heights with incredible speed.

## Comparison

| Sensor | Medium | Best Use |
|--------|--------|----------|
| **Air** | Air Pressure | Internal/External diameters |
| **Capacitive** | Electric Field | Conductive metals, tiny gaps |
| **Laser** | Light | Distances, 3D contours, non-conductive parts |

## Connections

- [[Metrology and Measuring Devices]] — laser sensors are often used in place of dial indicators
- [[Geometric Controls - Location and Runout]] — these sensors are ideal for measuring runout on spinning shafts
- [[Surface Finish Measurement]] — lasers can be used for non-contact profilometry

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.

---

[[Ch8 Home]] · [[MMET 380 Hub]]
