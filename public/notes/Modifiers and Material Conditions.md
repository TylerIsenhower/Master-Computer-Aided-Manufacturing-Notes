---
chapter: 7
type: concept
status: reviewing
difficulty: high
last-reviewed: 
mastery: 1
summary: "Explanation of MMC, LMC, and RFS modifiers, including the concept of 'bonus' tolerance"
equations:
  - name: "Total Tolerance at Current Size"
    latex: "\\text{Total Tol} = \\text{Geo Tol} + \\text{Bonus Tol}"
    notes: "Bonus Tol = |Current Size - MMC Size| (for MMC modifier)"
---

# Modifiers and Material Conditions

#mmet380 #ch7 #concept

## In Plain English

In GD&T, you can get a "bonus." If a hole is supposed to be at a specific spot, and you drill that hole slightly larger than its smallest allowed size (MMC), the hole becomes "easier" to fit with a pin. Because it's easier to assemble, the GD&T rules allow you to have a larger positional tolerance. This is the **Maximum Material Condition (MMC)** modifier. It's like a reward for being further away from the "tightest" possible fit. Conversely, **Least Material Condition (LMC)** is used when you are worried about the part being too thin or weak.

## Material Conditions

| Modifier | Name | Symbol | Definition |
|----------|------|:------:|------------|
| **MMC** | Maximum Material Condition | (M) | The size where the feature has the **most** material (Smallest hole or Largest pin). |
| **LMC** | Least Material Condition | (L) | The size where the feature has the **least** material (Largest hole or Smallest pin). |
| **RFS** | Regardless of Feature Size | (S) | The tolerance stays the same regardless of what size the feature is produced at (**Default Rule**). |

## Bonus Tolerance (MMC Example)

If an FCF specifies a positional tolerance at MMC:
1. When the part is at its **MMC size**, you only get the stated tolerance.
2. As the part's size moves away from MMC toward LMC, the difference is added to your geometric tolerance as a **Bonus**.

> [!important] The Bonus Rule
> $\text{Bonus} = |\text{Actual Size} - \text{MMC Size}|$
> This bonus allows more parts to be accepted that would have been rejected under traditional tolerancing.

## Rules for Modifiers
- It is optional to use a modifier.
- If present, it must be inside the FCF.
- Modifiers can be applied to the tolerance, the datum, or both.
- **Modifiers cannot be applied in tandem** (e.g., you can't have MMC and LMC on the same feature).

## Connections

- [[GD&T Rules and Principles]] — Rule #1 and RFS defaults
- [[GD&T Standards and Components]] — where these modifiers appear in the FCF
- [[Geometric Controls - Location and Runout]] — positional tolerance almost always uses MMC

---

## Worked Examples

> [!example]- Bonus Tolerance Example (click to expand)
> **Given:** Hole $\varnothing 10.0 \pm 0.1$. FCF specifies positional tolerance $\varnothing 0.2$ at (M).
> **Scenario:** Part is produced at $\varnothing 10.1$.
> **Calculation:**
> 1. MMC for a hole is the smallest size = $\varnothing 9.9$.
> 2. Current size = $\varnothing 10.1$.
> 3. Bonus = $10.1 - 9.9 = 0.2$.
> 4. Total Tolerance = $0.2 \text{ (stated)} + 0.2 \text{ (bonus)} = \mathbf{0.4}$.

---

[[Ch7 Home]] · [[MMET 380 Hub]]
