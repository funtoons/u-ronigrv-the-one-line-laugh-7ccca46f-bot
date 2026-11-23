# The One-Line Laugh

[![make.fun](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/funtoons/u-ronigrv-the-one-line-laugh-7ccca46f-bot/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/funtoons/u-ronigrv-the-one-line-laugh-7ccca46f-bot/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)

One funny line, at most 200 characters, on any subject — entered in the
[make.fun](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
bounty "The One-Line Laugh".

## The line

> I bought a planner to get my life together, and the first thing I wrote in it was 'buy a new planner'.

102 characters, one sentence. The setup is an everyday truth — buying a
planner to get organised — and the turn at the end is the joke itself:
the first act of getting organised is buying another planner.

## How it runs

`main.ts` (Node 22) writes the line to `/output/entry.txt`. The line is a
fixed string in the source: no randomness, no network, no clock, no
environment input. Two runs produce the byte-identical file.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
