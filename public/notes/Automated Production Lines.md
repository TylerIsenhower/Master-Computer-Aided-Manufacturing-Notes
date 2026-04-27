---
chapter: 5
type: concept
status: reviewing
difficulty: high
last-reviewed: 
mastery: 1
summary: "Performance metrics for multi-station production lines, including production rate and line efficiency accounting for downtime"
equations:
  - name: "Production Time"
    latex: "T_p = T_c + F \\cdot T_d"
    notes: "Tc = cycle time, F = downtime frequency, Td = downtime duration"
  - name: "Production Rate"
    latex: "R_p = \\frac{1}{T_p}"
    notes: "Typically converted to parts per hour"
  - name: "Line Efficiency"
    latex: "E = \\frac{T_c}{T_p} = \\frac{R_p}{R_{ideal}}"
    notes: "Ratio of ideal time to actual production time"
---

# Automated Production Lines

#mmet380 #ch5 #concept

## In Plain English

An automated production line is a series of workstations connected by a conveyor belt or robot that moves parts from one step to the next. In a perfect world, the speed of the line is determined by the slowest station. However, in the real world, machines break down. Because every station is connected, if one machine fails, the entire line stops. This is why "line efficiency" is so important—a small chance of a breakdown at 20 different stations can lead to a line that is broken more often than it is running.

## Line Performance Metrics

To find the actual output of a production line, we must account for **downtime**.

| Variable | Definition |
|----------|------------|
| **$T_c$** | **Ideal Cycle Time:** The time the line takes when everything is running perfectly. |
| **$T_{s}$** | **Station Processing Time:** Time spent at a specific station. |
| **$T_{r}$** | **Transfer Time:** Time to move the part to the next station. |
| **$F$** | **Downtime Frequency:** The probability that the line will stop during a cycle (sum of all station probabilities). |
| **$T_d$** | **Average Downtime:** The time it takes to fix a breakdown. |
| **$T_p$** | **Actual Production Time:** $T_p = T_c + F \cdot T_d$. |

## Production Rate and Efficiency

- **Actual Production Rate ($R_p$):** $R_p = 1/T_p$
- **Line Efficiency ($E$):** The percentage of time the line is actually producing parts.
  $$E = \frac{T_c}{T_p}$$

## Part Transfer Methods

How parts move from station to station:
- **Rotary (Indexing Table):** Good for small assemblies, parts move in a circle.
- **Linear:** Parts move in a straight line (conveyor).
- **Geneva Mechanism:** A mechanical way to create intermittent motion from continuous rotation.
- **Walking Beam:** A mechanism that lifts parts, moves them forward, and sets them down at the next station.

### Arrangement Types
- **Palletized:** Parts are clamped to a carrier (pallet) that the machine recognizes.
- **Free Transfer:** Parts sit directly on a conveyor belt.

## Connections

- [[Manufacturing Systems and Capacity Analysis]] — initial workload calculations
- [[Machine Clusters and Operator Utilization]] — the manual alternative to automation
- [[Flexible Manufacturing Systems (FMS)]] — the next evolution: a production line that can change what it's making instantly

---

## Worked Examples

> [!example]- Examples (click to expand)
> **Given:** 20 stations, Ideal Rate = 50 parts/hr ($T_c = 1.2$ min), Breakdown probability = 0.5% per station, Downtime = 8 min.
> **Find:** Actual Production Rate ($R_p$) and Efficiency ($E$).
> **Solution:**
> 1. Total breakdown freq $F = 20 \times 0.005 = 0.10$ (10%).
> 2. $T_p = 1.2 + (0.10 \times 8) = 1.2 + 0.8 = 2.0$ min/part.
> 3. $R_p = 1 / 2.0 = 0.5$ parts/min = **30 parts/hr**.
> 4. $E = 1.2 / 2.0 = 0.6 =$ **60%**.

---

[[Ch5 Home]] · [[MMET 380 Hub]]
