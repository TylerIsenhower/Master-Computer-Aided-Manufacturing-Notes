---
chapter: 4
type: concept
status: reviewing
difficulty: low
last-reviewed: 
mastery: 1
summary: "Classification of NC systems based on motion complexity: Point-to-Point, Straight Cut, and Contouring"
equations: []
---

# NC System Types

#mmet380 #ch4 #concept

## In Plain English

Not all CNC machines are created equal. Some only care about getting to a specific spot (like a drill press), while others need to follow exact lines or complex 3D curves. We classify these systems by how they handle motion between points. The simpler the motion, the cheaper the system.

## 1. Point-to-Point (PTP)
- **Objective:** Reaching a specific target coordinate.
- **Path Logic:** The path taken between points and the speed of travel are **not important**. 
- **Example:** An NC drill press. It rapids to a location, stops, drills, and then rapids to the next spot.

## 2. Straight Cut
- **Objective:** Moving a tool parallel to a single axis at a controlled rate.
- **Path Logic:** Suitable for machining in straight lines along X or Y. However, diagonal or circular cuts are not possible because it can only move **one axis at a time**.
- **Example:** An NC saw.

## 3. Contouring
- **Objective:** Machining curves or complex shapes in 2D or 3D.
- **Path Logic:** Simultaneous control of multiple axes. This allows for smooth diagonal lines and complex arcs.
- **Complexity:** These are the most complex and expensive systems.
- **Example:** Modern CNC mills, lathes, and grinders.

## Connections

- [[Manual Programming - Mill and Drill]] — how to program these complex contours
- [[CNC Machines]] — the hardware that implements these motion types
- [[Computer-Assisted Part Programming (CAM)]] — generating paths for complex contouring

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.

---

[[Ch4 Home]] · [[MMET 380 Hub]]
