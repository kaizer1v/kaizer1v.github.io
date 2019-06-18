---
layout: page
title: Projects
---

<!-- Jumbotron -->
<section class="jumbotron text-center">
  <div class="container">
    <h1 class="jumbotron-heading">Projects</h1>
    <p class="lead text-muted">Some of my work.</p>
  </div>
</section>

<!-- Cards -->
<div class="album py-5 bg-light">
  <div class="container">
    <div class="row">
      {% for prj in site.project_list %}
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <!-- <img src="/assets/{{ prj[1]['thumbnail'] }}"> -->
            <div class="card-body">
              <h5 class="card-title">{{ prj[1]['title'] }}</h5>
              <p class="card-text">{{ prj[1]['desc'] }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</div>
