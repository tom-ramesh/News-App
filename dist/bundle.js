(() => {
  "use strict";
  var A = {
      344: function (A, e, n) {
        var t =
          (this && this.__awaiter) ||
          function (A, e, n, t) {
            return new (n || (n = Promise))(function (i, r) {
              function s(A) {
                try {
                  o(t.next(A));
                } catch (A) {
                  r(A);
                }
              }
              function l(A) {
                try {
                  o(t.throw(A));
                } catch (A) {
                  r(A);
                }
              }
              function o(A) {
                var e;
                A.done
                  ? i(A.value)
                  : ((e = A.value),
                    e instanceof n
                      ? e
                      : new n(function (A) {
                          A(e);
                        })).then(s, l);
              }
              o((t = t.apply(A, e || [])).next());
            });
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.searchArticles = e.getMostViewedArticles = void 0);
        const i = n(763);
        (e.getMostViewedArticles = (A = 7) =>
          t(void 0, void 0, void 0, function* () {
            return yield (0,
            i.getRequest)(`https://api.nytimes.com/svc/mostpopular/v2/emailed/${A.toString()}.json`);
          })),
          (e.searchArticles = (A) =>
            t(void 0, void 0, void 0, function* () {
              return yield (0,
              i.getRequest)("https://api.nytimes.com/svc/search/v2/articlesearch.json", { q: A });
            }));
      },
      752: function (A, e, n) {
        var t =
          (this && this.__awaiter) ||
          function (A, e, n, t) {
            return new (n || (n = Promise))(function (i, r) {
              function s(A) {
                try {
                  o(t.next(A));
                } catch (A) {
                  r(A);
                }
              }
              function l(A) {
                try {
                  o(t.throw(A));
                } catch (A) {
                  r(A);
                }
              }
              function o(A) {
                var e;
                A.done
                  ? i(A.value)
                  : ((e = A.value),
                    e instanceof n
                      ? e
                      : new n(function (A) {
                          A(e);
                        })).then(s, l);
              }
              o((t = t.apply(A, e || [])).next());
            });
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const i = n(344),
          r = n(605),
          s = n(45),
          l = (A) => {
            const e = document.querySelectorAll(A);
            return e.length > 1 ? e : 1 === e.length ? e[0] : null;
          },
          o = l(".toggle-switch"),
          c = document.body,
          a = l(".news-tile"),
          d = l(".menu-btn"),
          v = l(".mobile-menu"),
          u = l("#menu-icon"),
          p = l("#profile-img"),
          y = l(".news-container div"),
          f = l(".news-tile-container"),
          b = l(".search-block"),
          m = l("#search-input"),
          k = { topNews: [], allNews: [] },
          h = (A, e) => {
            A(), e && e();
          };
        window.addEventListener("load", () =>
          t(void 0, void 0, void 0, function* () {
            (0, s.renderSkeletonCards)(y), (0, s.renderSkeletonTiles)(f);
            const A = yield (0, i.getMostViewedArticles)(),
              e = yield (0, i.searchArticles)("");
            h(
              () => (k.topNews = A.results),
              () => (0, r.renderTopArticles)(k, y)
            ),
              h(
                () => {
                  var A, n;
                  return (k.allNews =
                    null !==
                      (n =
                        null === (A = e.response) || void 0 === A
                          ? void 0
                          : A.docs) && void 0 !== n
                      ? n
                      : []);
                },
                () => (0, r.renderNewsTiles)(k, f)
              );
          })
        ),
          o.addEventListener("click", () => {
            o.classList.toggle("change"),
              c.classList.toggle("dark-mode"),
              null == a ||
                a.forEach((A) => {
                  A.classList.toggle("dark-mode");
                }),
              null == p ||
                p.forEach((A) => {
                  A.classList.toggle("dark-mode");
                });
          }),
          (d.onclick = () => {
            v.classList.toggle("active"), u.classList.toggle("bx-x");
          }),
          b.addEventListener("submit", (A) => {
            var e;
            A.preventDefault(),
              (e = m.value),
              t(void 0, void 0, void 0, function* () {
                (0, s.renderSkeletonTiles)(f);
                const A = yield (0, i.searchArticles)(e);
                h(
                  () => {
                    k.allNews = A.response.docs;
                  },
                  () => {
                    (0, r.renderNewsTiles)(k, f);
                  }
                );
              });
          });
      },
      605: (A, e, n) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.renderNewsTiles = e.renderTopArticles = void 0);
        const t = n(763);
        (e.renderTopArticles = (A, e) => {
          const n = A.topNews.map((A) => {
            const e = new Date(A.updated);
            return ` <div class="news-card">\n      <div class="news-header">\n        <div class="content-left">\n          <img\n            src="data:image/jpeg;base64,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"\n            alt=""\n            id=""\n          />\n          <div class="news-info">\n            <label for="" class="author-name">${A.byline.slice(
              3
            )}</label>\n            <p class="author-department">${
              A.section
            }</p>\n          </div>\n        </div>\n        <div class="content-right">\n          <p class="news-duration">${e.toLocaleString(
              "en-GB"
            )}</p>\n        </div>\n      </div>\n      <div class="news-body">\n        <p>\n          ${
              A.title
            }\n        </p>\n        <img\n          src=${
              A.media.length > 0 ? A.media[0]["media-metadata"][2].url : ""
            }\n          alt=""\n        />\n      </div>\n      <div class="news-footer">\n        <span\n          ><i class="bx bx-comment-detail"></i><label>Comment</label></span\n        >\n        <span><i class="bx bx-share"></i><label>Share</label></span>\n      </div>\n    </div>`;
          });
          n.length > 0 && ((e.innerHTML = ""), (e.innerHTML = n.join("")));
        }),
          (e.renderNewsTiles = (A, e) => {
            const n = A.allNews.map(
              (A, e) =>
                `<div class="news-tile">\n      <img\n        src=${
                  0 === e
                    ? ((A) => {
                        const e = [
                            "thumbnail",
                            "thumbLarge",
                            "square320",
                            "square640",
                            "blog480",
                            "blog533",
                            "blog427",
                          ],
                          n = A.find((A) =>
                            e.includes(
                              (null == A ? void 0 : A.subType) ||
                                (null == A ? void 0 : A.subtype)
                            )
                          );
                        return (
                          console.log(n), (0, t.makeImageUrl)(A[0].url || "")
                        );
                      })(A.multimedia)
                    : ""
                }\n        alt=""\n      />\n      <div>\n        <h4>\n          ${
                  A.headline.main
                }\n        </h4>\n        <p>\n          ${
                  A.abstract
                }\n        </p>\n      </div>\n    </div>`
            );
            n.length > 0 && ((e.innerHTML = ""), (e.innerHTML = n.join("")));
          });
      },
      45: (A, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.renderSkeletonTiles = e.renderSkeletonCards = void 0),
          (e.renderSkeletonCards = (A) => {
            const e = [...Array(3)].map(
              (A) =>
                ' <div class="skeleton-card">\n      <div class="skeleton-header">\n        <div class="skeleton-left">\n          <div></div>\n          <div class="skeleton-info">\n            <div></div>\n            <div></div>\n          </div>\n        </div>\n        <div class="skeleton-right">\n          <div></div>\n        </div>\n      </div>\n      <div class="skeleton-body">\n        <div class="skeleton-content">\n          <div></div>\n          <div></div>\n        </div>\n        <div></div>\n      </div>\n      <div class="skeleton-footer">\n        <div></div>\n        <div></div>\n      </div>\n    </div>'
            );
            (A.innerHTML = ""), (A.innerHTML = e.join(""));
          }),
          (e.renderSkeletonTiles = (A) => {
            const e = [...Array(10)].map(
              (A) =>
                '<div class="skeleton-news-tile">\n    <div></div>\n    <div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n  </div>'
            );
            (A.innerHTML = ""), (A.innerHTML = e.join(""));
          });
      },
      763: function (A, e) {
        var n =
          (this && this.__awaiter) ||
          function (A, e, n, t) {
            return new (n || (n = Promise))(function (i, r) {
              function s(A) {
                try {
                  o(t.next(A));
                } catch (A) {
                  r(A);
                }
              }
              function l(A) {
                try {
                  o(t.throw(A));
                } catch (A) {
                  r(A);
                }
              }
              function o(A) {
                var e;
                A.done
                  ? i(A.value)
                  : ((e = A.value),
                    e instanceof n
                      ? e
                      : new n(function (A) {
                          A(e);
                        })).then(s, l);
              }
              o((t = t.apply(A, e || [])).next());
            });
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.makeImageUrl = e.getRequest = void 0);
        const t = "zDWBvujoI2wUGWQcJmGiTthncx9rz4Jj";
        (e.getRequest = (A, e) =>
          n(void 0, void 0, void 0, function* () {
            const n = new URLSearchParams(e).toString(),
              i = n ? `${A}?${n}&api-key=${t}` : `${A}?api-key=${t}`;
            try {
              return (yield fetch(i, { method: "GET" })).json();
            } catch (A) {
              console.log("error while processing request", A);
            }
          })),
          (e.makeImageUrl = (A) =>
            `https://api.nytimes.com/svc/search/v2/articlesearch.json/get/${A}?api-key=${t}`);
      },
    },
    e = {};
  !(function n(t) {
    var i = e[t];
    if (void 0 !== i) return i.exports;
    var r = (e[t] = { exports: {} });
    return A[t].call(r.exports, r, r.exports, n), r.exports;
  })(752);
})();
