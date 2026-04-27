---
chapter: 6
type: concept
status: reviewing
difficulty: high
last-reviewed: 
mastery: 1
summary: "Predictive models for surface roughness (Ra) in turning and milling based on tool geometry and feed"
equations:
  - name: "Turning Surface Finish"
    latex: "R_a = \\frac{f^2}{32r}"
    notes: "f = feed (distance/rev), r = tool nose radius"
  - name: "Ball-end Milling (Ra)"
    latex: "R_a = 0.2423 \\cdot \\frac{f_t^2}{D}"
    notes: "ft = chip load, D = tool diameter"
  - name: "Ball-end Milling (Rt)"
    latex: "R_t = R - \\sqrt{R^2 - f_t^2/4}"
    notes: "Peak-to-valley roughness"
---

# Theoretical Surface Finish Analysis

#mmet380 #ch6 #concept

## In Plain English

In a perfect world with perfect machines, the "roughness" of a part is just a geometric pattern left by the tool. If you know the shape of the tool tip (radius) and how far the tool jumps forward every revolution (feed), you can use a formula to predict exactly how smooth the part will be before you even turn on the machine. This allows engineers to choose the fastest possible feed rate that still meets the customer's quality requirements.

## Theoretical Models

Surface finish is primarily determined by **feed** and **tool geometry**.

### 1. Turning
For a single-point tool with a nose radius $r$:
$$R_a = \frac{f^2}{32r}$$
- **Relationship:** Finish improves (smaller $R_a$) if you decrease the feed $f$ or increase the tool radius $r$.

### 2. Ball-End Milling
For a spherical cutter of diameter $D$:
$$R_a = 0.2423 \frac{f_t^2}{D}$$
- **Relationship:** Similar to turning, but the diameter of the ball mill takes the place of the nose radius.

### 3. Flat-End Milling
Unlike ball-end milling, the finish for a flat-end mill depends on the **concavity angle** ($\theta$) of the tool's face, not its diameter. Typical angles are 1-3°.

## Real-World Factors (Correction Factors)

Theoretical formulas only account for geometry. In practice, the finish is worse due to:
- **Built-up Edge (BUE):** Material sticking to the tool.
- **Vibration/Chatter:** Machine instability.
- **Material Tearing:** For ductile materials.
- **Cracking:** For brittle materials.

## Connections

- [[Turning Analysis]] — determining $f$
- [[Milling Analysis]] — determining $f_t$ and $D$
- [[Cutting Tools and Tool Life]] — how wear on the nose radius $r$ degrades the finish over time

---

## Worked Examples

> [!example]- Turning Finish Example (click to expand)
> **Given:** $f = 0.1$ mm/rev, $r = 0.8$ mm.
> **Find:** Theoretical $R_a$.
> **Solution:** 
> $R_a = (0.1)^2 / (32 \times 0.8)$
> $R_a = 0.01 / 25.6 = 0.00039$ mm = **0.39 μm**.

---

[[Ch6 Home]] · [[MMET 380 Hub]]
