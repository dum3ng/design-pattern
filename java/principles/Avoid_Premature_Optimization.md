# Avoid Premature Optimization

避免不成熟的优化

Quoting Donald Knuth:

> Programmers waste enormous amounts of time thinking about, or worrying about,
> the speed of noncritical parts of their programs, and these attempts at efficiency
> actually have a strong negative impact when debugging and maintenance are considered.
> We should forget about small efficiencies, say about 97% of the time:
> premature optimization is the root of all evil. Yet we should not pass up our
> opportunities in that critical 3%.
>
> 程序员浪费了巨大的时间去思考, 或者担忧程序中不重要的部分的速度, 在考虑到调试和
> 可维护性的时候, 这些在效率上的尝试实际上带来了强烈的负面影响.
> 我们应该忘记细微的效率, 在 97%的情况下:
> 过早的优化是罪恶之源.
> 当然我们也不应该在关键的 3%的情况下失去我们的机会.

## HOW

Make It Work Make It Right Make It Fast
Don't optimize until you need to, and only after profiling you discover a bottleneck optimise that.

-

- 除非确实需要, 不要进行优化, 而且只在通过性能分析之后发现瓶颈所在之后.

---

说的太对了.

在一个使用 uuid 作为数据的 id 的表结构设计时, 仅仅因为存储为 bit 比存储为 string
少了一半的存储空间, 以及实际上在当前(数据量很少)不存在的索引效率问题, 决定使用
`blob`类型来存储每一行的`UUID`, 造成调试时在数据库软件中无法直接看到 id, 很不
方便, 也造成了一些

> 优先考虑程序的可工作性,可维护性, 而不是性能.
