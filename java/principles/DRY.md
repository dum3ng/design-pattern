# DRY

系统中的每一部分知识都有一个单独的, 无歧义的, 权威的表示.

## Why

重复可以导致维护困难, 糟糕的重构, 以及逻辑矛盾.

修改系统中任何单独的元素, 不应该需要修改另外在逻辑上无关的元素.

Duplication (inadvertent or purposeful duplication) can lead to maintenance nightmares, poor factoring, and logical contradictions.
A modification of any single element of a system does not require a change in other logically unrelated elements.
Additionally, elements that are logically related all change predictably and uniformly, and are thus kept in sync.
How

Put business rules, long expressions, if statements, math formulas, metadata, etc. in only one place.
Identify the single, definitive source of every piece of knowledge used in your system, and then use that source to generate applicable instances of that knowledge (code, documentation, tests, etc).
Apply the Rule of three.
