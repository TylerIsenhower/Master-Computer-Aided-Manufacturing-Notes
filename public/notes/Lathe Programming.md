---
chapter: 4
type: concept
status: reviewing
difficulty: medium
last-reviewed: 
mastery: 1
summary: "Differences between milling and turning programming, including X-axis diameter mode and absolute/incremental letter logic"
equations: []
---

# Lathe Programming

#mmet380 #ch4 #concept

## In Plain English

Programming a lathe is different because the part spins while the tool stays mostly still (the opposite of a mill). Instead of three axes (X, Y, Z), a standard lathe only uses two: **X** and **Z**. The most important thing to remember is that on a lathe, **X measures the diameter** of the part, not the distance from the center. Also, lathes don't usually use a toggle for absolute/incremental mode; instead, they use different letters: **X/Z** for absolute and **U/W** for incremental.

## Key Differences from Milling

| Feature | Mill / Drill | Lathe |
|---------|--------------|-------|
| **Axes** | X, Y, Z | X, Z |
| **X-Axis** | True distance | **Diameter** of the part |
| **Mode Toggle** | G90 / G91 | Specific letters (X/Z vs U/W) |
| **Absolute** | `G90` | Use `X` and `Z` |
| **Incremental** | `G91` | Use `U` (for X) and `W` (for Z) |

## Lathe Coordinates and Origin
- **Work Origin:** Usually placed at the very tip (center) of the finished part.
- **X-axis:** Vertical motion (increases diameter).
- **Z-axis:** Horizontal motion (moving toward or away from the chuck).

## Circular Interpolation on Lathe
- **G02/G03:** Still used for clockwise/counter-clockwise.
- **I, K:** Used for arc centers (incremental distance from start to center).
- **No Y/J:** Since the tool moves in the X-Z plane only, Y and J are typically not used.

## Spindle Rotation Direction
- Spindle rotation (M03/M04) is viewed from the **motor housing** looking toward the spindle.

## Connections

- [[NC Code Syntax and G-M Codes]] — basic code definitions
- [[Manual Programming - Mill and Drill]] — comparing tool motion logic
- [[Positioning and Compensation]] — comparing G90/G91 logic to U/W logic

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.

---

[[Ch4 Home]] · [[MMET 380 Hub]]
