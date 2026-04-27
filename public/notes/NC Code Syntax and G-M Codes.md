---
chapter: 3
type: concept
status: reviewing
difficulty: low
last-reviewed: 
mastery: 1
summary: "The fundamental syntax of NC programming, including word address format and modal vs non-modal codes"
equations: []
---

# NC Code Syntax and G-M Codes

#mmet380 #ch3 #concept

## In Plain English

Numerical Control (NC) code, often called G-code, is the language that CNC machines speak. It's written in "word address format," which is just a letter followed by a number. Think of it like a recipe: **N** is the step number, **G** tells the machine what *kind* of move to make (like a straight line), and **X, Y, Z** are the coordinates. Some codes are "modal," meaning the machine remembers them until you change them (like staying in "G01" mode for every line), while others are "one-hit wonders" (non-modal).

## Word Address Format

A line of code (a "block") consists of several words:
- **N:** Sequence number (e.g., N10, N20).
- **G:** Preparatory function (defines the mode of motion).
- **X, Y, Z:** Coordinate positions.
- **F:** Feed rate.
- **S:** Spindle speed (RPM).
- **T:** Tool selection.
- **M:** Miscellaneous functions (Coolant on/off, spindle on/off).

## Modal vs. Non-Modal

| Type | Description | Example |
|------|-------------|---------|
| **Modal** | The code stays active until overridden by another code in the same group. | G01 (Stay in linear feed mode until I say G00) |
| **Non-Modal**| The code only applies to the block it is in. | G04 (Dwell/Wait for X seconds) |

## Standard M-Codes

- **M03:** Spindle ON (Clockwise).
- **M05:** Spindle STOP.
- **M08:** Flood Coolant ON.
- **M09:** Coolant OFF.
- **M30:** End of Program and Reset.

## Programming Rules
1. **Decimals are Required:** Most machines will interpret `X5` as 5 microns (0.0005) instead of 5 inches. Always write `X5.0`.
2. **Leading Zeros:** `G01` and `G1` are often treated the same, but `G01` is standard.
3. **No Symbols:** Machines cannot read $\pi$ or fractions; use `3.1416` or `0.5`.

## Connections

- [[Manual Programming - Mill and Drill]] — how to use these codes for motion
- [[Lathe Programming]] — specialized codes for turning
- [[Positioning and Compensation]] — how G90/G91 change the meaning of X/Y

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.

---

[[Ch3 Home]] · [[MMET 380 Hub]]
