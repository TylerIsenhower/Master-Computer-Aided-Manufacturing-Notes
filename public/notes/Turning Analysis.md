---
chapter: 6
type: concept
status: reviewing
difficulty: low
last-reviewed: 
mastery: 1
summary: "Quantitative mechanics of lathe operations, including cutting speed, feed rate, and material removal rate"
equations:
  - name: "Cutting Speed"
    latex: "V = \\pi D N"
    notes: "D = diameter, N = rotational speed (RPM)"
  - name: "Feed Rate"
    latex: "f_r = N \\cdot f"
    notes: "f = feed (distance/rev)"
  - name: "Material Removal Rate (MRR)"
    latex: "MRR = V \\cdot f \\cdot d"
    notes: "d = depth of cut"
  - name: "Machining Time"
    latex: "t = \\frac{L}{f_r}"
    notes: "L = length of cut"
---

# Turning Analysis

#mmet380 #ch6 #concept

## In Plain English

Turning is the process of shaping a part while it spins on a lathe. To analyze the process, we look at three main settings: how fast the part spins (**Speed**), how fast the tool slides along the part (**Feed**), and how deep the tool bites into the material (**Depth of Cut**). By combining these, we can calculate the **Material Removal Rate (MRR)**—how much metal we are turning into chips every minute—and the **Machining Time**, which tells us exactly how long it will take to finish the cut.

## The Parameters of Turning

A single-point cutting tool removes material from a rotating workpiece.

| Parameter | Symbol | Definition |
|-----------|--------|------------|
| **Cutting Speed** | $V$ | The relative speed between the tool and the surface ($\pi D N$). |
| **Feed** | $f$ | The distance the tool moves per one revolution of the part. |
| **Feed Rate** | $f_r$ | The linear speed of the tool along the axis ($N \times f$). |
| **Depth of Cut** | $d$ | The thickness of the material being removed in one pass. |
| **MRR** | $MRR$ | The volume of material removed per unit time ($V \times f \times d$). |

## Calculation Logic

1. **Calculate Rotational Speed ($N$):** Usually given or derived from a target cutting speed $V$.
2. **Calculate Feed Rate ($f_r$):** The machine moves the tool at this speed.
3. **Calculate Machining Time ($t$):** For a cut of length $L$, the time is $L / f_r$.
4. **Determine MRR:** Useful for estimating power requirements and production efficiency.

> [!tip] NC Program Mapping
> In a G-code program, the rotational speed **S** is equivalent to $N$, and the feed rate **F** is equivalent to $f_r$.

## Connections

- [[Cutting Tools and Tool Life]] — how the speed $V$ affects how long the tool lasts
- [[Theoretical Surface Finish Analysis]] — how the feed $f$ affects the roughness of the part
- [[Machining Economics]] — finding the best $V$ for cost or time

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.

---

[[Ch6 Home]] · [[MMET 380 Hub]]
