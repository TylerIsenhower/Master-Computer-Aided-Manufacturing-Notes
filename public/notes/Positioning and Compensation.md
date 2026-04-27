---
chapter: 4
type: concept
status: reviewing
difficulty: medium
last-reviewed: 
mastery: 1
summary: "Absolute vs. Incremental positioning (G90/G91) and Tool Radius Compensation (G41/G42)"
equations: []
---

# Positioning and Compensation

#mmet380 #ch4 #concept

## In Plain English

When telling a machine where to go, you have two choices: use GPS coordinates (Absolute) or use "turn left at the next light" instructions (Incremental). **Absolute positioning (G90)** refers everything back to a single fixed origin point. **Incremental positioning (G91)** moves the tool relative to where it is right now. Additionally, because tools have thickness (radius), we use **Tool Compensation** to tell the computer to automatically shift the tool to the side so the *edge* of the cutter hits the line, rather than the *center* of the cutter running right through the part.

## Absolute vs. Incremental

| Mode | G-Code | Reference Point |
|------|--------|-----------------|
| **Absolute** | `G90` | The fixed Work Origin (0,0,0) |
| **Incremental** | `G91` | The current tool position |

> [!important] The G90/G91 Toggle
> A programmer can switch between these modes mid-program. If you are at `(5,2)` and command `X2.0 Y3.0`:
> - In **G90**, the tool moves to the coordinate `(2,3)`.
> - In **G91**, the tool moves 2 units in X and 3 units in Y, ending at `(7,5)`.

## Tool Radius Compensation

A cutter (end mill, laser beam, etc.) has a finite size. If you program the tool center to follow a 2-inch path, your resulting part will be too small (2 inches minus the tool diameter).

**Tool Compensation** shifts the tool path by one radius away from the programmed line.

| Code | Type | Direction |
|------|------|-----------|
| **G40** | Cancel | Disables compensation |
| **G41** | Left Offset | Tool shifts to the **left** of the programmed path (relative to feed direction) |
| **G42** | Right Offset | Tool shifts to the **right** of the programmed path |

### Usage Rules
1. You must manually enter the tool's diameter/radius into the CNC controller's offset table before running the program.
2. The computer uses these table values to calculate the shift on the fly.
3. This is essential for turning inserts, milling cutters, wire EDM, and laser beam sizes.

## Work Offsets (G54 - G59)

Work offsets allow a single program to be used for multiple identical parts.
- `G54` is the standard offset for a single part.
- `G55` through `G59` can be used to define the locations of additional parts clamped on the same machine table.
- This allows for high-efficiency batch production.

## Connections

- [[NC Code Syntax and G-M Codes]] — the G-codes that activate these modes
- [[Manual Programming - Mill and Drill]] — how to apply these modes in code examples
- [[Lathe Programming]] — how positioning differs on a lathe (U, W instead of G91)

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.

---

[[Ch4 Home]] · [[MMET 380 Hub]]
