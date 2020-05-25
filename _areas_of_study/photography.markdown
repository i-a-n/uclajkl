---
layout: default
title: Photography
permalink: /areas_of_study/photography
hero_image: https://placehold.it/566x399
---

<!-- 50/50 hero -->
<div class="container  module--50-50">
	<div class="row">
		<div class="col-12  col-md-6  px-0  order-md-2">
			<img src="{{ page.hero_image }}" class="img-fluid">
		</div>
		<div class="col--text  col-12  col-md-6  px-0  bg-secondary  order-md-1  d-flex  align-items-center">
			<div class="container  px-5  py-4  pt-lg-0">
				<h5 class="font-serif-1  serif-headline-1">Text TK TKTKTKTK</h5>
				<p class="mt-3">Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes.</p>
				<div class="container  my-2  d-none  d-lg-block">&nbsp;</div>
			</div>
		</div>
	</div>
</div>

{% assign dept_members = site.faculty_members | where: "dept", "Photography" %}
	{% for faculty_member in dept_members %}
	<div class="col-12  col-sm-3  px-0  py-3  py-md-0  faculty-img-container">
		<img src="/{{ faculty_member.image }}" class="full-width-img" />
		{{ faculty_member.name }} - {{ faculty_member.dept }}
	</div>
{% endfor %}
