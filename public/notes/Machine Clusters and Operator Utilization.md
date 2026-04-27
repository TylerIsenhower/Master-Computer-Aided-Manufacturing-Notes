---
chapter: 5
type: concept
status: reviewing
difficulty: high
last-reviewed: 
mastery: 1
summary: "Determining the maximum number of machines a single operator can manage based on machining and service time balance"
equations:
  - name: "Workload Balance for n Machines"
    latex: "n(T_{sv} + T_r) \\le T_m + T_{sv}"
    notes: "n = number of machines, T_sv = service time (load/unload), T_r = repositioning time (walking), T_m = machining time"
---

# Machine Clusters and Operator Utilization

#mmet380 #ch5 #concept

## In Plain English

In a modern factory, one person rarely runs just one machine. Since CNC machines spend most of their time cutting metal automatically, a single operator can "tend" several machines at once. They unload a finished part from Machine 1, walk to Machine 2, load a new part, and so on. The goal is to calculate exactly how many machines one person can handle without making the machines sit idle waiting for the person. This is called a **Machine Cluster**.

## The Workload Balance Equation

To maximize machine utilization, the time it takes an operator to serve and walk between all $n$ machines must be **less than or equal to** the time it takes for one machine to finish a part and be serviced.

$$n(T_{sv} + T_r) \le T_m + T_{sv}$$

| Variable | Definition |
|----------|------------|
| **$n$** | Number of machines in the cluster |
| **$T_{sv}$** | Service time (time spent loading/unloading one part) |
| **$T_r$** | Repositioning time (time spent walking between machines) |
| **$T_m$** | Machining time (the automatic cycle) |

> [!important] Rounding Rule
> When solving for $n$, if you get a decimal like 4.22:
> - **Round DOWN** (to $n=4$) to ensure the machines are fully utilized. The operator will have a bit of extra time.
> - **Round UP** (to $n=5$) only if you are willing to make the operator walk faster or if the machines will have to wait for the operator (lower utilization).

## Conditions for Successful Clustering

Machine clusters work best when:
1. **Long Cycle Time:** The longer $T_m$ is, the more machines one person can tend.
2. **Similar Machines:** It's easier to manage identical setups.
3. **Close Proximity:** Reducing $T_r$ (walking distance) allows for more machines.
4. **Safety:** The operator must be able to move between machines without hazards.

## Connections

- [[Manufacturing Systems and Capacity Analysis]] — first determine total $n$ needed, then cluster them for labor efficiency
- [[Automated Production Lines]] — the next step up, where the machines are connected by conveyors instead of an operator walking
- [[CNC Machining and Turning Centers]] — the actual machines being clustered

---

## Worked Examples

> [!example]- Examples (click to expand)
> **Given:** $T_m = 2.75$ min, $T_{sv} = 25$ s (0.4167 min), $T_r = 20$ s (0.3333 min).
> **Find:** Max machines $n$ for one operator.
> **Solution:**
> 1. $n(0.4167 + 0.3333) \le 2.75 + 0.4167$
> 2. $n(0.75) \le 3.1667$
> 3. $n \le 4.22$.
> 4. **Result:** Choose $n=4$ machines. 
> 5. **Insight:** At $n=4$, the operator has more time to walk (22.5s vs 20s). At $n=5$, the operator would have to walk faster (13s) to keep up.

---

[[Ch5 Home]] · [[MMET 380 Hub]]
