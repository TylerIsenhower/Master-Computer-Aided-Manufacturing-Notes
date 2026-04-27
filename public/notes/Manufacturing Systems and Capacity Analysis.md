---
chapter: 5
type: concept
status: reviewing
difficulty: medium
last-reviewed: 
mastery: 1
summary: "Formulas for production capacity, including fabrication quantity adjusted for rejection rate and workload balancing for machine requirements"
equations:
  - name: "Fabrication Quantity"
    latex: "Q_f = \\frac{Q}{1-q}"
    notes: "Q = order quantity, q = rejection rate"
  - name: "Total Workload"
    latex: "WL = T_{su} + T_f = T_{su} + Q_f \\cdot T_c"
    notes: "T_su = total setup time, T_f = total fabrication time, T_c = machine cycle time"
  - name: "Required Number of Cells"
    latex: "n = \\frac{WL}{H}"
    notes: "H = available time per cell (e.g., 40 hrs/week). Always round up to next integer."
---

# Manufacturing Systems and Capacity Analysis

#mmet380 #ch5 #concept

## In Plain English

A manufacturing system is the combination of people, machines, and software used to make a product. Before you start production, you need to know if you have enough "capacity"—meaning enough machines and time to meet the customer's order. You have to account for the fact that some parts will be scrapped (rejection rate), and that machines take time to set up before they can start making parts. By calculating the total workload in hours and dividing it by the hours one machine can work in a week, you find the exact number of machines you need to buy or schedule.

## Capacity Analysis Workflow

To determine the required number of machines ($n$) for a specific order:

1. **Calculate Fabrication Quantity ($Q_f$):** Since some parts will be rejected, you must make more than the ordered amount $Q$.
   $$Q_f = \frac{Q}{1-q}$$
2. **Calculate Total Setup Time ($T_{su}$):** Total time spent mounting tools and clamping workpieces.
3. **Calculate Total Fabrication Time ($T_f$):** Multiply the adjusted quantity $Q_f$ by the cycle time per part $T_c$.
   $$T_f = Q_f \times T_c$$
4. **Determine Total Workload ($WL$):** The sum of setup and fabrication time.
   $$WL = T_{su} + T_f$$
5. **Calculate Required Cells ($n$):** Divide the workload by the available hours per week per machine ($H$).
   $$n = \frac{WL}{H}$$
   > [!important] Rounding Rule
   > Because you cannot have a fraction of a machine, always **round up** to the nearest integer.

## Setup Logic: Single vs. Multiple Machines

- **Fixed Setup (20 different parts):** If you have 20 different parts to make, you must set up 20 times regardless of how many machines you use. Total setup time is fixed.
- **Per-Machine Setup (Identical parts):** If all parts are identical, each machine you add requires its own setup time. In this case, the $n$ on both sides of the balance equation must be solved for algebraically.

## Connections

- [[Machine Clusters and Operator Utilization]] — once you have the machines, how many can one person run?
- [[Automated Production Lines]] — scaling this logic to multi-station systems
- [[Process Economics]] — how these capacity decisions affect the cost per part (Ch 6)

---

## Worked Examples

> [!example]- Examples (click to expand)
> **Given:** Order 900 parts, 5% rejection, 10 min/part cycle time, 2.5 hr setup per lathe, 40 hr work week.
> **Find:** Required number of lathes for identical parts.
> **Solution:**
> 1. $Q_f = 900 / (1 - 0.05) = 948$ parts.
> 2. $T_f = 948 \times 10 \text{ min} = 158$ hrs.
> 3. Balance: $40n = 2.5n + 158$
> 4. $37.5n = 158 \implies n = 4.21$.
> 5. **Result:** 5 lathes.

---

[[Ch5 Home]] · [[MMET 380 Hub]]
