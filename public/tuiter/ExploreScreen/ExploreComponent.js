import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return `
  <div class="row mb-1">
                    <div class="col-11">
            <input class="form-control search-form rounded-pill w-100 ps-5"
                   placeholder="Search Twitter" type="search"/>
            <i class="fas fa-search position-absolute top-0 mt-3 ms-3 text-secondary"></i>
                    </div>
                    <a class="col-1" href = "explore_settings.html">
                        <i class="fas fa-cog wd-icon-blue fa-2x mt-1" style="color: dodgerblue"></i>
                    </a>
                </div>

                <ul class="nav nav-tabs mb-1">
                    <li class="nav-item">
                        <a class="nav-link active" href="for-you.html">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="d-sm-none d-md-block nav-item">
                        <a class="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
                    <div class="list-group-item pt-0 pb-0 ps-0 pe-0 ">
                        <img src="../../images/rocket.png" class="img-fluid">
                        <div class="position-absolute bottom-0 text-white">
                            <b class="p-2 m-0 " style  = "font-size: 30px; top: 470px">SpaceX's Starship</b>
                        </div>
                    </div>
           ${PostSummaryList()}
    `;
};
export default ExploreComponent;