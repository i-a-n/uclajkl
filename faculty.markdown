---
title: Faculty
layout: default
permalink: "/faculty/"
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

<!-- Quick lil spacer -->
<div class="container  my-2">&nbsp;</div>

<!-- centered heading -->
<div class="container  text-center  my-5">
	<h5 class="font-serif-1  serif-headline-1">Text TK TKTK TK TKTKTK</h5>
</div>

<!-- photo row, with bio container below -->
<div class="container  faculty-container  px-0">

	<!-- single row -->
	<div class="row  mx-0  justify-content-between  img-row  mt-md-4">

		{% for faculty_member in site.faculty_members %}
			{% assign remainder = forloop.index | modulo: 4 %}
			<div class="col-12  col-sm-3  px-0  py-3  py-md-0  faculty-img-container">
				<img
					alt="{{ faculty_member.alt }}"
					class="full-width-img"
					data-faculty-bio="{{ faculty_member.content }}"
					data-faculty-email="{{ faculty_member.email }}"
					data-faculty-name="{{ faculty_member.name }}"
					data-faculty-title="{{ faculty_member.professional_title }}"
					src="/{{ faculty_member.image }}"
				/>
				{{ faculty_member.name }} - {{ faculty_member.dept }}
			</div>

			{% comment %} <!-- Every fourth member, insert the "detail conatiner" --> {% endcomment %}
			{% if remainder == 0 %}
				</div>
				<div class="row  mx-0  py-5  bg-light-gray  detail-container">
					<div class="col-4">
						<span class="font-serif-1  faculty-inline-title  js-replace-name">{name}</span><br />
						<span class="font-serif-1  text-muted  faculty-inline-title  js-replace-title">{professional_title}</span><br />
						<small class="font-serif-1  text-dark-blue  js-replace-email">{email}</small>
					</div>
					<div class="col-7  js-replace-bio">
						{bio}
					</div>
				</div>
			<div class="row  mx-0  justify-content-between  img-row  mt-md-4">
			{% endif %}

			{% comment %} <!-- On the final item, calculate how many blanks we need, and insert them --> {% endcomment %}
			{% if forloop.last == true %}
				{% assign numberOfBlanks = 4 | minus: remainder %}
				{% for i in (1..numberOfBlanks) %}
					<div class="col-12  col-sm-3  px-0  py-3  py-md-0  faculty-img-container">
					</div>
				{% endfor %}
			{% endif %}

		{% endfor %}
	</div>
	<div class="row  mx-0  py-5  bg-light-gray  detail-container">
		<div class="col-4">
			<span class="font-serif-1  faculty-inline-title  js-replace-name">{name}</span><br />
			<span class="font-serif-1  text-muted  faculty-inline-title  js-replace-title">{professional_title}</span><br />
			<small class="font-serif-1  text-dark-blue  js-replace-email">{email}</small>
		</div>
		<div class="col-7  js-replace-bio">
			{bio}
		</div>
	</div>
</div>

<!-- faculty three-col row -->
<div class="container  my-5  faculty-list-container">
	<div class="row">
		<div class="col  col-sm  offset-sm-1">
			<div class="font-serif-1  serif-headline-1  pb-3">Text TKTK</div>
			<ul class="list-no-style  faculty-list">
				<li>TextTK TKTKTKTK</li>
				<li>TextTK TKTKTK</li>
				<li>TextTK TKTKTKTK</li>
				<li>TextTK TKTKTKTK</li>
			</ul>
		</div>
		<div class="col-11  col-sm  pt-4  pt-sm-0">
			<div class="font-serif-1  serif-headline-1">Text TK TKTK</div>
			<small class="font-serif-1  text-muted">Text TKTKTK</small>
			<ul class="list-no-style  faculty-list">
				<li>TextTK TKTKTK</li>
				<li>TextTK TKTKTKTK</li>
				<li>TextTK TKTKTKTK</li>
			</ul>
		</div>
		<div class="col-11  col-sm  pt-4  pt-sm-0">
			<div class="font-serif-1  serif-headline-1  pb-3">TextTK</div>
			<ul class="list-no-style  faculty-list">
				<li>TextTK TKTKTK</li>
				<li>TextTK TKTKTKTK</li>
				<li>TextTK TKTKTK</li>
				<li>TextTK TKTKTKTK</li>
				<li>TextTK TKTKTK</li>
			</ul>
			<div class="font-serif-1  serif-headline-1  pt-4  pb-3">Text TKTK TK</div>
			<ul class="list-no-style  faculty-list">
				<li>TextTL TKTKTK</li>
				<li>TextTL TKTKTK</li>
				<li>TextTL TKTKTK</li>
				<li>TextTL TKTKTK</li>
				<li>TextTL TKTKTK</li>
				<li>TextTL TKTKTK</li>
			</ul>
		</div>
	</div>
</div>
