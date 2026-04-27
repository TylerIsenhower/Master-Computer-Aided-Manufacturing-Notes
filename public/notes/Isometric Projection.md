---
chapter: 2
type: concept
status: reviewing
difficulty: low
last-reviewed: 
mastery: 1
summary: "3D pictorial drawing on isometric grid; axes 120° apart; circles become ellipses"
equations: []
---

# Isometric Projection

#mmet380 #ch2 #concept

## In Plain English

Orthographic views are precise but hard to picture in 3D — you have to mentally stitch three flat views together. An isometric drawing shows the object three-dimensionally on a flat sheet by tilting the coordinate axes so that x, y, and z are each 120° apart. The result looks like a 3D box you could hold. It's not true perspective (objects don't shrink with distance), but it's fast to sketch, easy to read, and a standard complement to orthographic drawings in engineering documentation.

## Coordinate System

> Draw three axes (x, y, z) on your paper with each pair of axes **120° apart**.

- The **z-axis** is aligned **vertically** on isometric paper
- All lines in the drawing run **parallel to one of the three axes**
- Lines that are not parallel to any axis (true oblique lines) cannot be drawn directly — you must locate endpoints and connect them

```
         z (vertical)
         |
         |   / x
         |  /
         | /
         +-------y
```

## Sketching a Circle in Isometric

A circle in isometric appears as an **ellipse**. The procedure:

1. Draw the **isometric square** (a rhombus) that would circumscribe the circle
2. The ellipse is tangent to the midpoints of the four sides of the rhombus
3. Blend in the ellipse, maintaining smooth tangency at each midpoint
4. Note that **different faces** of a solid produce ellipses with different orientations

> [!tip] Ellipse orientation
> The major axis of the ellipse is always **perpendicular** to the axis the circle is parallel to. A circle on the top (horizontal) face has a "flat" ellipse; a circle on the front face has a more "upright" ellipse.

## Practical Rules

| Rule | Detail |
|------|--------|
| Grid paper | Use **isometric grid paper** and align the z-axis vertically |
| Guide lines | **Omit** guide lines from the final drawing |
| Hidden lines | Hidden lines are **optional** in isometric drawings |
| Circles | Draw circumscribing rhombus first, then fit the ellipse |
| Non-isometric lines | Locate endpoints on the axes, then connect — do not measure along the oblique direction |

## When to Use Isometric vs. Orthographic

| Isometric | Orthographic |
|-----------|-------------|
| Communicating shape quickly to non-engineers | Fully defining geometry for manufacturing |
| Assembly instructions, catalogs | Engineering drawings, inspection |
| Easier for spatial visualization | Required for true dimensions and tolerances |
| Circles → ellipses (slight distortion) | Circles appear as true circles in the correct view |

> [!note] Combination Drawings
> It is common to include **both** an isometric pictorial and orthographic views on the same sheet to give machinists a geometric understanding while providing dimensioned views for measurements.

## Connections

- [[Orthographic Projection]] — the companion 2D multi-view system
- [[Auxiliary Views]] — for parts with oblique faces that isometric alone cannot show truly
- [[Computer-Aided Design (CAD)]] — CAD software generates isometric-like 3D views automatically

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.
> Format: **Given** → **Find** → **Solution steps** → **Key insight**.

---

[[Ch2 Home]] · [[MMET 380 Hub]]
