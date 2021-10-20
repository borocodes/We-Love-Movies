const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./theaters.service");

async function list(req, res) {
    if (req.query.is_showing) {
      const data = await service.list()
      res.json({ data })
    } else {
      const data = await service.list()
      res.json({ data })
    }
  }

  async function listMoviesShowing(req, res) {
      const { movie } = res.locals
      const data = await service.listMoviesShowing(movie.movie_id)
      res.json({ data })
  }

module.exports = {
list: asyncErrorBoundary(list)
}