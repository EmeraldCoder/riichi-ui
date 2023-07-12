import { computed as y, openBlock as t, createElementBlock as i, normalizeClass as h, unref as q, createVNode as p, renderSlot as k, createBlock as u, withCtx as m, Fragment as c, renderList as o } from "vue";
const v = {
  __name: "tile-icon",
  props: {
    tile: {
      type: String,
      required: !1
    }
  },
  setup(e) {
    const l = e, a = y(() => l.tile == null ? "riichi-tile-icon" : `riichi-tile-icon riichi-tile-icon--${l.tile.toLowerCase()}`);
    return (n, r) => (t(), i("span", {
      class: h(q(a))
    }, null, 2));
  }
};
const f = {
  __name: "tile",
  props: {
    tile: {
      type: String,
      required: !1
    },
    reversed: {
      type: Boolean,
      required: !1,
      default: !1
    },
    sided: {
      type: Boolean,
      required: !1,
      default: !1
    },
    small: {
      type: Boolean,
      required: !1,
      default: !1
    },
    xSmall: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const l = e;
    return (a, n) => (t(), i("span", {
      class: h(["riichi-tile", { "riichi-tile--reversed": l.reversed, "riichi-tile--sided": l.sided, "riichi-tile--small": l.small, "riichi-tile--x-small": l.xSmall }])
    }, [
      p(v, {
        tile: l.tile
      }, null, 8, ["tile"])
    ], 2));
  }
};
const _ = {
  __name: "tile-group",
  props: {
    stacked: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    return (l, a) => (t(), i("span", {
      class: h(["riichi-tile-group", { "riichi-tile-group--stacked": e.stacked }])
    }, [
      k(l.$slots, "default")
    ], 2));
  }
}, $ = {
  __name: "ankan",
  props: {
    tile: {
      type: String,
      required: !0
    },
    small: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    return (l, a) => (t(), u(_, null, {
      default: m(() => [
        (t(), i(c, null, o(4, (n, r) => p(f, {
          tile: e.tile,
          key: r,
          reversed: r === 0 || r === 3,
          small: e.small
        }, null, 8, ["tile", "reversed", "small"])), 64))
      ]),
      _: 1
    }));
  }
}, x = {
  __name: "chii",
  props: {
    tile: {
      type: String,
      required: !0
    },
    fromTile: {
      type: String,
      required: !0
    },
    small: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const l = e, a = y(() => {
      const n = parseInt(l.tile[0]), r = [
        l.tile,
        `${n + 1}${l.tile[1]}`,
        `${n + 2}${l.tile[1]}`
      ];
      return [l.fromTile, ...r.filter((s) => s !== l.fromTile)];
    });
    return (n, r) => (t(), u(_, null, {
      default: m(() => [
        (t(!0), i(c, null, o(q(a), (s, d) => (t(), u(f, {
          tile: s,
          key: s,
          sided: d === 0,
          small: e.small
        }, null, 8, ["tile", "sided", "small"]))), 128))
      ]),
      _: 1
    }));
  }
}, b = {
  __name: "daiminkan",
  props: {
    tile: {
      type: String,
      required: !0
    },
    from: {
      type: Number,
      required: !0
    },
    small: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const l = e, a = y(() => l.from === 2 ? 3 : l.from);
    return (n, r) => (t(), u(_, null, {
      default: m(() => [
        (t(), i(c, null, o(4, (s, d) => p(f, {
          tile: e.tile,
          key: d,
          sided: d === q(a),
          small: e.small
        }, null, 8, ["tile", "sided", "small"])), 64))
      ]),
      _: 1
    }));
  }
}, B = {
  __name: "pon",
  props: {
    tile: {
      type: String,
      required: !0
    },
    from: {
      type: Number,
      required: !0
    },
    small: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    return (l, a) => (t(), u(_, null, {
      default: m(() => [
        (t(), i(c, null, o(3, (n, r) => p(f, {
          tile: e.tile,
          key: r,
          sided: r === e.from,
          small: e.small
        }, null, 8, ["tile", "sided", "small"])), 64))
      ]),
      _: 1
    }));
  }
}, S = {
  __name: "shouminkan",
  props: {
    tile: {
      type: String,
      required: !0
    },
    from: {
      type: Number,
      required: !0
    },
    small: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    return (l, a) => (t(), u(_, null, {
      default: m(() => [
        (t(), i(c, null, o(3, (n, r) => (t(), i(c, null, [
          r === e.from ? (t(), u(_, {
            key: `tile-group-${r}`,
            stacked: ""
          }, {
            default: m(() => [
              (t(), i(c, null, o(2, (s, d) => p(f, {
                tile: e.tile,
                key: `tile-${r}.${d}`,
                small: e.small,
                sided: ""
              }, null, 8, ["tile", "small"])), 64))
            ]),
            _: 2
          }, 1024)) : (t(), u(f, {
            key: `tile-${r}`,
            tile: e.tile,
            small: e.small
          }, null, 8, ["tile", "small"]))
        ], 64))), 64))
      ]),
      _: 1
    }));
  }
};
const T = {
  __name: "tenbou",
  props: {
    value: {
      type: Number,
      required: !0
    },
    small: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const l = e, a = y(() => l.value === 100 ? 6 : l.value === 1e3 ? 1 : l.value === 5e3 ? 5 : l.value === 1e4 ? 9 : 0);
    return (n, r) => (t(), i("span", {
      class: h(["riichi-tenbou", { "riichi-tenbou--small": e.small, "riichi-tenbou--hyaku": e.value === 100, "riichi-tenbou--sen": e.value === 1e3, "riichi-tenbou--go-sen": e.value === 5e3, "riichi-tenbou--ichi-man": e.value === 1e4 }])
    }, [
      (t(!0), i(c, null, o(q(a), (s) => (t(), i("span", {
        class: "riichi-tenbou__dot",
        key: s
      }))), 128))
    ], 2));
  }
};
export {
  $ as Ankan,
  x as Chii,
  b as Daiminkan,
  B as Pon,
  S as Shouminkan,
  T as Tenbou,
  f as Tile,
  _ as TileGroup,
  v as TileIcon
};
