---
chapter: 6
type: concept
status: reviewing
difficulty: medium
last-reviewed: 
mastery: 1
summary: "Analysis of face and peripheral milling, including chip load, up/down milling modes, and machining time"
equations:
  - name: "Cutting Speed"
    latex: "V = \\pi D N"
    notes: "D = cutter diameter, N = rotational speed"
  - name: "Feed Rate"
    latex: "f_r = N \\cdot n \\cdot f"
    notes: "n = number of teeth, f = chip load (in/tooth)"
  - name: "Milling MRR"
    latex: "MRR = w \\cdot d \\cdot f_r"
    notes: "w = width of cut, d = depth of cut"
  - name: "Machining Time (Milling)"
    latex: "t = \\frac{L + A}{f_r}"
    notes: "L = length, A = approach distance (usually D/2 for face milling)"
---

# Milling Analysis

#mmet380 #ch6 #concept

## In Plain English

Milling uses a rotating tool with multiple teeth to remove material. Unlike turning, the tool moves and the part stays (mostly) still. We have to account for how many teeth the cutter has—the more teeth, the faster we can feed the tool. There are two ways the teeth can hit the metal: **Up Milling** (where the teeth cut "upward" against the feed) and **Down Milling** (where the teeth "climb" onto the material). Down milling is generally preferred because it leaves a better finish and creates less burr.

## Milling Modes

### Face vs. Peripheral Milling
- **Face Milling:** The cutting action happens on the *end* of the tool. Used for flattening large surfaces.
- **Peripheral Milling:** The cutting action happens on the *sides* of the tool (like a saw blade).

### Up vs. Down Milling
| Feature | Up Milling (Conventional) | Down Milling (Climb) |
|---------|---------------------------|----------------------|
| **Direction** | Tool rotates against the feed. | Tool rotates with the feed. |
| **Chip Size** | Starts thin, ends thick. | Starts thick, ends thin. |
| **Finish** | Rougher, more burr. | **Smoother**, less burr. |
| **Tool Life** | Shortened by friction at start. | Generally longer tool life. |

## Speed and Feed Calculations

The logic is similar to turning, but we multiply by the number of teeth ($n$):
1. **Chip Load ($f$):** The amount of metal each individual tooth removes per revolution.
2. **Feed Rate ($f_r$):** $f_r = N \times n \times f$.
3. **Approach Distance ($A$):** In face milling, the tool must start before the part and end after the part. We typically add $D/2$ to the length of the cut to account for this "approach."

## Connections

- [[Turning Analysis]] — comparison of rotational vs linear feed
- [[Hole Making and Specialized Operations]] — milling machines often perform these tasks
- [[Theoretical Surface Finish Analysis]] — how chip load $f$ determines roughness

---

## Worked Examples

> [!example]- Vertical vs Horizontal Example (click to expand)
> **Scenario:** Mill a 50mm wide, 100mm long block.
> **Vertical (?25mm):** Requires 2 passes to cover 50mm width. Time per pass is $(100 + 12.5) / 5 = 22.5$ min. Total = **45 min**.
> **Horizontal (?25mm, 60mm wide):** Only 1 pass needed. Time is $(100 + 6.78) / 2 = 53.4$ min.
> **Conclusion:** Vertical milling is faster in this specific case despite requiring two passes.

---

[[Ch6 Home]] · [[MMET 380 Hub]]
