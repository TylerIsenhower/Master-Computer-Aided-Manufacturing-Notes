---
chapter: 6
type: concept
status: reviewing
difficulty: high
last-reviewed: 
mastery: 1
summary: "Calculating optimal cutting speeds for minimum production time and minimum unit cost; defining high-efficiency machining"
equations:
  - name: "Tool Life for Min Time"
    latex: "T_{min\\_time} = (1/n - 1) T_s"
    notes: "Ts = tool setup time"
  - name: "Optimal Speed for Min Time"
    latex: "V_{min\\_time} = C / (T_{min\\_time})^n"
    notes: "n, C = Taylor constants"
  - name: "Tool Life for Min Cost"
    latex: "T_{min\\_cost} = (1/n - 1) (T_s + C_t/C_o)"
    notes: "Ct = tool cost, Co = overhead rate ($/min)"
  - name: "Optimal Speed for Min Cost"
    latex: "V_{min\\_cost} = C / (T_{min\\_cost})^n"
    notes: "n, C = Taylor constants"
---

# Machining Economics

#mmet380 #ch6 #concept

## In Plain English

In manufacturing, there is a trade-off: if you run the machine fast, you finish the part sooner, but you wear out the tool faster and spend more money on replacements. If you run it slow, the tool lasts forever, but you pay the operator more in hourly wages to wait for the part. There are two "perfect" speeds: one that finishes the job in the absolute **minimum time**, and one that results in the **minimum cost** per part. Any speed between these two is called the "High Efficiency" range.

## 1. Minimum Production Time ($V_{min\_time}$)

Used when meeting a tight delivery schedule is the top priority.
- **Goal:** Minimize total time ($T_p = T_{handling} + T_{machining} + T_{tool\_change}$).
- **Optimal Tool Life:** $T = (1/n - 1) T_s$.
- **Optimal Speed:** Use Taylor's Equation ($V = C/T^n$) with the $T$ calculated above.

## 2. Minimum Unit Cost ($V_{min\_cost}$)

Used when maximizing profit is the priority.
- **Goal:** Minimize total cost ($C_p = C_{handling} + C_{machining} + C_{tooling\_setup} + C_{tool\_replacement}$).
- **Optimal Tool Life:** $T = (1/n - 1) (T_s + C_t / C_o)$.
- **Optimal Speed:** Use Taylor's Equation ($V = C/T^n$) with the $T$ calculated above.

| Variable | Definition |
|----------|------------|
| **$C_t$** | Cost per cutting edge (the tool itself). |
| **$C_o$** | Operating cost per minute (labor + overhead). |
| **$T_s$** | Time required to change the tool. |

## High Efficiency Machining Range

Because $V_{min\_time}$ is always higher than $V_{min\_cost}$, the range between them is the "sweet spot" for production. Running slower than $V_{min\_cost}$ is a waste of labor; running faster than $V_{min\_time}$ is a waste of tooling.

## Connections

- [[Cutting Tools and Tool Life]] — provides the $n$ and $C$ constants
- [[Turning Analysis]] — the specific operation usually being optimized
- [[Process Economics]] — the broader context of manufacturing profitability

---

## Worked Examples

> [!example]- Optimization Example (click to expand)
> **Given:** $n=0.262$, $C=182.8$, $T_s = 2$ min, $C_t = \$12$, $C_o = \$0.60/\text{min}$.
> **Min Time Tool Life:** $T = (1/0.262 - 1) \times 2 = 5.6$ min.
> **Min Time Speed:** $V = 182.8 / (5.6)^{0.262} = \mathbf{116.4 \text{ m/min}}$.
> 
> **Min Cost Tool Life:** $T = (1/0.262 - 1) \times (2 + 12/0.6) = 2.81 \times 22 = 62$ min.
> **Min Cost Speed:** $V = 182.8 / (62)^{0.262} = \mathbf{62.1 \text{ m/min}}$.

---

[[Ch6 Home]] · [[MMET 380 Hub]]
