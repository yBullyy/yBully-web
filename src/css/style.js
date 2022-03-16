import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Nunito:300,400,600,700&amp;display=swap");

@media (min-width: 1400px) {
	.container {
		max-width: 1140px !important;
	}
}
.row > * {
	position: relative;
}
h1,
.h1 {
	font-size: 42px !important;
}
h2,
.h2 {
	font-size: 36px !important;
}
h3,
.h3 {
	font-size: 30px !important;
}
h4,
.h4 {
	font-size: 24px !important;
}
h5,
.h5 {
	font-size: 20px !important;
}
h6,
.h6 {
	font-size: 16px !important;
}
.display-1 {
	font-size: 80px !important;
}
.display-2 {
	font-size: 72px !important;
}
.display-3 {
	font-size: 64px !important;
}
.display-4 {
	font-size: 56px !important;
}
.display-5 {
	font-size: 48px !important;
}
.display-6 {
	font-size: 40px !important;
}
.bg-primary {
	background-color: #2f55d4 !important;
}
.bg-soft-primary {
	background-color: rgba(47, 85, 212, 0.1) !important;
	border: 1px solid rgba(47, 85, 212, 0.1) !important;
	color: #2f55d4 !important;
}
.text-primary {
	color: #2f55d4 !important;
}
a.text-primary:hover,
a.text-primary:focus {
	color: #284bc1 !important;
}
.bg-secondary {
	background-color: #5a6d90 !important;
}
.bg-soft-secondary {
	background-color: rgba(90, 109, 144, 0.1) !important;
	border: 1px solid rgba(90, 109, 144, 0.1) !important;
	color: #5a6d90 !important;
}
.text-secondary {
	color: #5a6d90 !important;
}
a.text-secondary:hover,
a.text-secondary:focus {
	color: #506180 !important;
}
.bg-success {
	background-color: #2eca8b !important;
}
.bg-soft-success {
	background-color: rgba(46, 202, 139, 0.1) !important;
	border: 1px solid rgba(46, 202, 139, 0.1) !important;
	color: #2eca8b !important;
}
.text-success {
	color: #2eca8b !important;
}
a.text-success:hover,
a.text-success:focus {
	color: #29b57d !important;
}
.bg-warning {
	background-color: #f17425 !important;
}
.bg-soft-warning {
	background-color: rgba(241, 116, 37, 0.1) !important;
	border: 1px solid rgba(241, 116, 37, 0.1) !important;
	color: #f17425 !important;
}
.text-warning {
	color: #f17425 !important;
}
a.text-warning:hover,
a.text-warning:focus {
	color: #ed650f !important;
}
.bg-info {
	background-color: #17a2b8 !important;
}
.bg-soft-info {
	background-color: rgba(23, 162, 184, 0.1) !important;
	border: 1px solid rgba(23, 162, 184, 0.1) !important;
	color: #17a2b8 !important;
}
.text-info {
	color: #17a2b8 !important;
}
a.text-info:hover,
a.text-info:focus {
	color: #148ea1 !important;
}
.bg-danger {
	background-color: #e43f52 !important;
}
.bg-soft-danger {
	background-color: rgba(228, 63, 82, 0.1) !important;
	border: 1px solid rgba(228, 63, 82, 0.1) !important;
	color: #e43f52 !important;
}
.text-danger {
	color: #e43f52 !important;
}
a.text-danger:hover,
a.text-danger:focus {
	color: #e1293e !important;
}
.bg-dark {
	background-color: #3c4858 !important;
}
.bg-soft-dark {
	background-color: rgba(60, 72, 88, 0.1) !important;
	border: 1px solid rgba(60, 72, 88, 0.1) !important;
	color: #3c4858 !important;
}
.text-dark {
	color: #3c4858 !important;
}
a.text-dark:hover,
a.text-dark:focus {
	color: #323c49 !important;
}
.bg-muted {
	background-color: #8492a6 !important;
}
.bg-soft-muted {
	background-color: rgba(132, 146, 166, 0.1) !important;
	border: 1px solid rgba(132, 146, 166, 0.1) !important;
	color: #8492a6 !important;
}
.text-muted {
	color: #8492a6 !important;
}
a.text-muted:hover,
a.text-muted:focus {
	color: #75859b !important;
}
.bg-light {
	background-color: #f8f9fc !important;
}
.bg-soft-light {
	background-color: rgba(248, 249, 252, 0.1) !important;
	border: 1px solid rgba(248, 249, 252, 0.1) !important;
	color: #f8f9fc !important;
}
.text-light {
	color: #f8f9fc !important;
}
a.text-light:hover,
a.text-light:focus {
	color: #e6eaf4 !important;
}
.bg-blue {
	background-color: #2f55d4 !important;
}
.bg-soft-blue {
	background-color: rgba(47, 85, 212, 0.1) !important;
	border: 1px solid rgba(47, 85, 212, 0.1) !important;
	color: #2f55d4 !important;
}
.text-blue {
	color: #2f55d4 !important;
}
a.text-blue:hover,
a.text-blue:focus {
	color: #284bc1 !important;
}
.bg-footer {
	background-color: #202942 !important;
}
.bg-soft-footer {
	background-color: rgba(32, 41, 66, 0.1) !important;
	border: 1px solid rgba(32, 41, 66, 0.1) !important;
	color: #202942 !important;
}
.text-footer {
	color: #202942 !important;
}
a.text-footer:hover,
a.text-footer:focus {
	color: #181e30 !important;
}
.d-flex .flex-1 {
	flex: 1;
}
.bg-black {
	background: #161c2d !important;
}
.text-white-50 {
	color: rgba(255, 255, 255, 0.5);
}
video:focus {
	outline: none;
}
.list-inline-item:not(:last-child) {
	margin-right: 2px;
	margin-bottom: 5px;
}
.rounded {
	border-radius: 6px !important;
}
.rounded-top {
	border-top-left-radius: 6px !important;
	border-top-right-radius: 6px !important;
}
.rounded-left {
	border-top-left-radius: 6px !important;
	border-bottom-left-radius: 6px !important;
}
.rounded-bottom {
	border-bottom-left-radius: 6px !important;
	border-bottom-right-radius: 6px !important;
}
.rounded-right {
	border-top-right-radius: 6px !important;
	border-bottom-right-radius: 6px !important;
}
.rounded-md {
	border-radius: 10px !important;
}
.rounded-lg {
	border-radius: 30px !important;
}
.border-primary {
	border-color: #2f55d4 !important;
}
.border-secondary {
	border-color: #5a6d90 !important;
}
.border-success {
	border-color: #2eca8b !important;
}
.border-warning {
	border-color: #f17425 !important;
}
.border-info {
	border-color: #17a2b8 !important;
}
.border-danger {
	border-color: #e43f52 !important;
}
.border-dark {
	border-color: #3c4858 !important;
}
.border-muted {
	border-color: #8492a6 !important;
}
.border-light {
	border-color: #f8f9fc !important;
}
.border-blue {
	border-color: #2f55d4 !important;
}
.border-footer {
	border-color: #202942 !important;
}
.border {
	border: 1px solid #e9ecef !important;
}
.border-top {
	border-top: 1px solid #e9ecef !important;
}
.border-bottom {
	border-bottom: 1px solid #e9ecef !important;
}
.border-left {
	border-left: 1px solid #e9ecef !important;
}
.border-right {
	border-right: 1px solid #e9ecef !important;
}
.opacity-05 {
	opacity: 0.05;
}
.opacity-075 {
	opacity: 0.075;
}
.opacity-1 {
	opacity: 0.1;
}
.opacity-2 {
	opacity: 0.2;
}
.opacity-3 {
	opacity: 0.3;
}
.opacity-4 {
	opacity: 0.4;
}
.opacity-5 {
	opacity: 0.5;
}
.opacity-6 {
	opacity: 0.6;
}
.opacity-7 {
	opacity: 0.7;
}
.opacity-8 {
	opacity: 0.8;
}
.opacity-9 {
	opacity: 0.9;
}
.small,
small {
	font-size: 90%;
}
.card .card-body {
	padding: 1.5rem;
}
.offcanvas .offcanvas-header .dark-version {
	display: none;
}
.offcanvas .offcanvas-header .light-version {
	display: inline-block;
}
.offcanvas .offcanvas-header .btn-close {
	color: #3c4858;
	background: none;
}
.offcanvas .offcanvas-header .btn-close:focus {
	box-shadow: none;
}
.offcanvas.offcanvas-end {
	width: 350px;
}
@media (max-width: 768px) {
	.display-1 {
		font-size: 56px !important;
	}
	.display-2 {
		font-size: 50px !important;
	}
	.display-3 {
		font-size: 42px !important;
	}
	.display-4 {
		font-size: 36px !important;
	}
	.display-5 {
		font-size: 30px !important;
	}
	.display-6 {
		font-size: 24px !important;
	}
}
.component-wrapper .title {
	font-size: 20px;
}
.component-wrapper.sticky-bar li {
	margin-bottom: 6px;
}
.component-wrapper.sticky-bar li:last-child {
	margin-bottom: 0px !important;
}
.component-wrapper.sticky-bar li a {
	transition: all 0.5s ease;
}
.component-wrapper.sticky-bar li a:hover,
.component-wrapper.sticky-bar li a:focus {
	color: #2f55d4 !important;
}
.btn-primary {
	background-color: #2f55d4 !important;
	border: 1px solid #2f55d4 !important;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(47, 85, 212, 0.1);
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.btn-primary.focus {
	background-color: #2443ac !important;
	border-color: #2443ac !important;
	color: #fff !important;
}
.btn-soft-primary {
	background-color: rgba(47, 85, 212, 0.05) !important;
	border: 1px solid rgba(47, 85, 212, 0.05) !important;
	color: #2f55d4 !important;
	box-shadow: 0 3px 5px 0 rgba(47, 85, 212, 0.1);
}
.btn-soft-primary:hover,
.btn-soft-primary:focus,
.btn-soft-primary:active,
.btn-soft-primary.active,
.btn-soft-primary.focus {
	background-color: #2f55d4 !important;
	border-color: #2f55d4 !important;
	color: #fff !important;
}
.btn-outline-primary {
	border: 1px solid #2f55d4;
	color: #2f55d4;
	background-color: transparent;
}
.btn-outline-primary:hover,
.btn-outline-primary:focus,
.btn-outline-primary:active,
.btn-outline-primary.active,
.btn-outline-primary.focus,
.btn-outline-primary:not(:disabled):not(.disabled):active {
	background-color: #2f55d4;
	border-color: #2f55d4;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(47, 85, 212, 0.1);
}
.btn-secondary {
	background-color: #5a6d90 !important;
	border: 1px solid #5a6d90 !important;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(90, 109, 144, 0.1);
}
.btn-secondary:hover,
.btn-secondary:focus,
.btn-secondary:active,
.btn-secondary.active,
.btn-secondary.focus {
	background-color: #465571 !important;
	border-color: #465571 !important;
	color: #fff !important;
}
.btn-soft-secondary {
	background-color: rgba(90, 109, 144, 0.05) !important;
	border: 1px solid rgba(90, 109, 144, 0.05) !important;
	color: #5a6d90 !important;
	box-shadow: 0 3px 5px 0 rgba(90, 109, 144, 0.1);
}
.btn-soft-secondary:hover,
.btn-soft-secondary:focus,
.btn-soft-secondary:active,
.btn-soft-secondary.active,
.btn-soft-secondary.focus {
	background-color: #5a6d90 !important;
	border-color: #5a6d90 !important;
	color: #fff !important;
}
.btn-outline-secondary {
	border: 1px solid #5a6d90;
	color: #5a6d90;
	background-color: transparent;
}
.btn-outline-secondary:hover,
.btn-outline-secondary:focus,
.btn-outline-secondary:active,
.btn-outline-secondary.active,
.btn-outline-secondary.focus,
.btn-outline-secondary:not(:disabled):not(.disabled):active {
	background-color: #5a6d90;
	border-color: #5a6d90;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(90, 109, 144, 0.1);
}
.btn-success {
	background-color: #2eca8b !important;
	border: 1px solid #2eca8b !important;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(46, 202, 139, 0.1);
}
.btn-success:hover,
.btn-success:focus,
.btn-success:active,
.btn-success.active,
.btn-success.focus {
	background-color: #25a06e !important;
	border-color: #25a06e !important;
	color: #fff !important;
}
.btn-soft-success {
	background-color: rgba(46, 202, 139, 0.05) !important;
	border: 1px solid rgba(46, 202, 139, 0.05) !important;
	color: #2eca8b !important;
	box-shadow: 0 3px 5px 0 rgba(46, 202, 139, 0.1);
}
.btn-soft-success:hover,
.btn-soft-success:focus,
.btn-soft-success:active,
.btn-soft-success.active,
.btn-soft-success.focus {
	background-color: #2eca8b !important;
	border-color: #2eca8b !important;
	color: #fff !important;
}
.btn-outline-success {
	border: 1px solid #2eca8b;
	color: #2eca8b;
	background-color: transparent;
}
.btn-outline-success:hover,
.btn-outline-success:focus,
.btn-outline-success:active,
.btn-outline-success.active,
.btn-outline-success.focus,
.btn-outline-success:not(:disabled):not(.disabled):active {
	background-color: #2eca8b;
	border-color: #2eca8b;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(46, 202, 139, 0.1);
}
.btn-warning {
	background-color: #f17425 !important;
	border: 1px solid #f17425 !important;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(241, 116, 37, 0.1);
}
.btn-warning:hover,
.btn-warning:focus,
.btn-warning:active,
.btn-warning.active,
.btn-warning.focus {
	background-color: #d55b0e !important;
	border-color: #d55b0e !important;
	color: #fff !important;
}
.btn-soft-warning {
	background-color: rgba(241, 116, 37, 0.05) !important;
	border: 1px solid rgba(241, 116, 37, 0.05) !important;
	color: #f17425 !important;
	box-shadow: 0 3px 5px 0 rgba(241, 116, 37, 0.1);
}
.btn-soft-warning:hover,
.btn-soft-warning:focus,
.btn-soft-warning:active,
.btn-soft-warning.active,
.btn-soft-warning.focus {
	background-color: #f17425 !important;
	border-color: #f17425 !important;
	color: #fff !important;
}
.btn-outline-warning {
	border: 1px solid #f17425;
	color: #f17425;
	background-color: transparent;
}
.btn-outline-warning:hover,
.btn-outline-warning:focus,
.btn-outline-warning:active,
.btn-outline-warning.active,
.btn-outline-warning.focus,
.btn-outline-warning:not(:disabled):not(.disabled):active {
	background-color: #f17425;
	border-color: #f17425;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(241, 116, 37, 0.1);
}
.btn-info {
	background-color: #17a2b8 !important;
	border: 1px solid #17a2b8 !important;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(23, 162, 184, 0.1);
}
.btn-info:hover,
.btn-info:focus,
.btn-info:active,
.btn-info.active,
.btn-info.focus {
	background-color: #117a8b !important;
	border-color: #117a8b !important;
	color: #fff !important;
}
.btn-soft-info {
	background-color: rgba(23, 162, 184, 0.05) !important;
	border: 1px solid rgba(23, 162, 184, 0.05) !important;
	color: #17a2b8 !important;
	box-shadow: 0 3px 5px 0 rgba(23, 162, 184, 0.1);
}
.btn-soft-info:hover,
.btn-soft-info:focus,
.btn-soft-info:active,
.btn-soft-info.active,
.btn-soft-info.focus {
	background-color: #17a2b8 !important;
	border-color: #17a2b8 !important;
	color: #fff !important;
}
.btn-outline-info {
	border: 1px solid #17a2b8;
	color: #17a2b8;
	background-color: transparent;
}
.btn-outline-info:hover,
.btn-outline-info:focus,
.btn-outline-info:active,
.btn-outline-info.active,
.btn-outline-info.focus,
.btn-outline-info:not(:disabled):not(.disabled):active {
	background-color: #17a2b8;
	border-color: #17a2b8;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(23, 162, 184, 0.1);
}
.btn-danger {
	background-color: #e43f52 !important;
	border: 1px solid #e43f52 !important;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(228, 63, 82, 0.1);
}
.btn-danger:hover,
.btn-danger:focus,
.btn-danger:active,
.btn-danger.active,
.btn-danger.focus {
	background-color: #d21e32 !important;
	border-color: #d21e32 !important;
	color: #fff !important;
}
.btn-soft-danger {
	background-color: rgba(228, 63, 82, 0.05) !important;
	border: 1px solid rgba(228, 63, 82, 0.05) !important;
	color: #e43f52 !important;
	box-shadow: 0 3px 5px 0 rgba(228, 63, 82, 0.1);
}
.btn-soft-danger:hover,
.btn-soft-danger:focus,
.btn-soft-danger:active,
.btn-soft-danger.active,
.btn-soft-danger.focus {
	background-color: #e43f52 !important;
	border-color: #e43f52 !important;
	color: #fff !important;
}
.btn-outline-danger {
	border: 1px solid #e43f52;
	color: #e43f52;
	background-color: transparent;
}
.btn-outline-danger:hover,
.btn-outline-danger:focus,
.btn-outline-danger:active,
.btn-outline-danger.active,
.btn-outline-danger.focus,
.btn-outline-danger:not(:disabled):not(.disabled):active {
	background-color: #e43f52;
	border-color: #e43f52;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(228, 63, 82, 0.1);
}
.btn-dark {
	background-color: #3c4858 !important;
	border: 1px solid #3c4858 !important;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(60, 72, 88, 0.1);
}
.btn-dark:hover,
.btn-dark:focus,
.btn-dark:active,
.btn-dark.active,
.btn-dark.focus {
	background-color: #272f3a !important;
	border-color: #272f3a !important;
	color: #fff !important;
}
.btn-soft-dark {
	background-color: rgba(60, 72, 88, 0.05) !important;
	border: 1px solid rgba(60, 72, 88, 0.05) !important;
	color: #3c4858 !important;
	box-shadow: 0 3px 5px 0 rgba(60, 72, 88, 0.1);
}
.btn-soft-dark:hover,
.btn-soft-dark:focus,
.btn-soft-dark:active,
.btn-soft-dark.active,
.btn-soft-dark.focus {
	background-color: #3c4858 !important;
	border-color: #3c4858 !important;
	color: #fff !important;
}
.btn-outline-dark {
	border: 1px solid #3c4858;
	color: #3c4858;
	background-color: transparent;
}
.btn-outline-dark:hover,
.btn-outline-dark:focus,
.btn-outline-dark:active,
.btn-outline-dark.active,
.btn-outline-dark.focus,
.btn-outline-dark:not(:disabled):not(.disabled):active {
	background-color: #3c4858;
	border-color: #3c4858;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(60, 72, 88, 0.1);
}
.btn-muted {
	background-color: #8492a6 !important;
	border: 1px solid #8492a6 !important;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(132, 146, 166, 0.1);
}
.btn-muted:hover,
.btn-muted:focus,
.btn-muted:active,
.btn-muted.active,
.btn-muted.focus {
	background-color: #68788f !important;
	border-color: #68788f !important;
	color: #fff !important;
}
.btn-soft-muted {
	background-color: rgba(132, 146, 166, 0.05) !important;
	border: 1px solid rgba(132, 146, 166, 0.05) !important;
	color: #8492a6 !important;
	box-shadow: 0 3px 5px 0 rgba(132, 146, 166, 0.1);
}
.btn-soft-muted:hover,
.btn-soft-muted:focus,
.btn-soft-muted:active,
.btn-soft-muted.active,
.btn-soft-muted.focus {
	background-color: #8492a6 !important;
	border-color: #8492a6 !important;
	color: #fff !important;
}
.btn-outline-muted {
	border: 1px solid #8492a6;
	color: #8492a6;
	background-color: transparent;
}
.btn-outline-muted:hover,
.btn-outline-muted:focus,
.btn-outline-muted:active,
.btn-outline-muted.active,
.btn-outline-muted.focus,
.btn-outline-muted:not(:disabled):not(.disabled):active {
	background-color: #8492a6;
	border-color: #8492a6;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(132, 146, 166, 0.1);
}
.btn-light {
	background-color: #f8f9fc !important;
	border: 1px solid #f8f9fc !important;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(248, 249, 252, 0.1);
}
.btn-light:hover,
.btn-light:focus,
.btn-light:active,
.btn-light.active,
.btn-light.focus {
	background-color: #d4daed !important;
	border-color: #d4daed !important;
	color: #fff !important;
}
.btn-soft-light {
	background-color: rgba(248, 249, 252, 0.05) !important;
	border: 1px solid rgba(248, 249, 252, 0.05) !important;
	color: #f8f9fc !important;
	box-shadow: 0 3px 5px 0 rgba(248, 249, 252, 0.1);
}
.btn-soft-light:hover,
.btn-soft-light:focus,
.btn-soft-light:active,
.btn-soft-light.active,
.btn-soft-light.focus {
	background-color: #f8f9fc !important;
	border-color: #f8f9fc !important;
	color: #fff !important;
}
.btn-outline-light {
	border: 1px solid #f8f9fc;
	color: #f8f9fc;
	background-color: transparent;
}
.btn-outline-light:hover,
.btn-outline-light:focus,
.btn-outline-light:active,
.btn-outline-light.active,
.btn-outline-light.focus,
.btn-outline-light:not(:disabled):not(.disabled):active {
	background-color: #f8f9fc;
	border-color: #f8f9fc;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(248, 249, 252, 0.1);
}
.btn-blue {
	background-color: #2f55d4 !important;
	border: 1px solid #2f55d4 !important;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(47, 85, 212, 0.1);
}
.btn-blue:hover,
.btn-blue:focus,
.btn-blue:active,
.btn-blue.active,
.btn-blue.focus {
	background-color: #2443ac !important;
	border-color: #2443ac !important;
	color: #fff !important;
}
.btn-soft-blue {
	background-color: rgba(47, 85, 212, 0.05) !important;
	border: 1px solid rgba(47, 85, 212, 0.05) !important;
	color: #2f55d4 !important;
	box-shadow: 0 3px 5px 0 rgba(47, 85, 212, 0.1);
}
.btn-soft-blue:hover,
.btn-soft-blue:focus,
.btn-soft-blue:active,
.btn-soft-blue.active,
.btn-soft-blue.focus {
	background-color: #2f55d4 !important;
	border-color: #2f55d4 !important;
	color: #fff !important;
}
.btn-outline-blue {
	border: 1px solid #2f55d4;
	color: #2f55d4;
	background-color: transparent;
}
.btn-outline-blue:hover,
.btn-outline-blue:focus,
.btn-outline-blue:active,
.btn-outline-blue.active,
.btn-outline-blue.focus,
.btn-outline-blue:not(:disabled):not(.disabled):active {
	background-color: #2f55d4;
	border-color: #2f55d4;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(47, 85, 212, 0.1);
}
.btn-footer {
	background-color: #202942 !important;
	border: 1px solid #202942 !important;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(32, 41, 66, 0.1);
}
.btn-footer:hover,
.btn-footer:focus,
.btn-footer:active,
.btn-footer.active,
.btn-footer.focus {
	background-color: #0f131f !important;
	border-color: #0f131f !important;
	color: #fff !important;
}
.btn-soft-footer {
	background-color: rgba(32, 41, 66, 0.05) !important;
	border: 1px solid rgba(32, 41, 66, 0.05) !important;
	color: #202942 !important;
	box-shadow: 0 3px 5px 0 rgba(32, 41, 66, 0.1);
}
.btn-soft-footer:hover,
.btn-soft-footer:focus,
.btn-soft-footer:active,
.btn-soft-footer.active,
.btn-soft-footer.focus {
	background-color: #202942 !important;
	border-color: #202942 !important;
	color: #fff !important;
}
.btn-outline-footer {
	border: 1px solid #202942;
	color: #202942;
	background-color: transparent;
}
.btn-outline-footer:hover,
.btn-outline-footer:focus,
.btn-outline-footer:active,
.btn-outline-footer.active,
.btn-outline-footer.focus,
.btn-outline-footer:not(:disabled):not(.disabled):active {
	background-color: #202942;
	border-color: #202942;
	color: #fff !important;
	box-shadow: 0 3px 5px 0 rgba(32, 41, 66, 0.1);
}
.btn {
	padding: 8px 20px;
	outline: none;
	text-decoration: none;
	font-size: 16px;
	letter-spacing: 0.5px;
	transition: all 0.3s;
	font-weight: 600;
	border-radius: 6px;
}
.btn:focus {
	box-shadow: none !important;
}
.btn.btn-sm {
	padding: 7px 16px;
	font-size: 10px;
}
.btn.btn-lg {
	padding: 14px 30px;
	font-size: 16px;
}
.btn.searchbtn {
	padding: 6px 20px;
}
.btn.btn-pills {
	border-radius: 30px;
}
.btn.btn-light {
	color: #3c4858 !important;
	border: 1px solid #dee2e6 !important;
}
.btn.btn-light:hover,
.btn.btn-light:focus,
.btn.btn-light:active,
.btn.btn-light.active,
.btn.btn-light.focus {
	background-color: #d4daed !important;
	color: #3c4858 !important;
}
.btn.btn-soft-light {
	color: rgba(60, 72, 88, 0.5) !important;
	border: 1px solid #dee2e6 !important;
}
.btn.btn-soft-light:hover,
.btn.btn-soft-light:focus,
.btn.btn-soft-light:active,
.btn.btn-soft-light.active,
.btn.btn-soft-light.focus {
	color: #3c4858 !important;
}
.btn.btn-outline-light {
	border: 1px solid #dee2e6 !important;
	color: #3c4858 !important;
	background-color: transparent;
}
.btn.btn-outline-light:hover,
.btn.btn-outline-light:focus,
.btn.btn-outline-light:active,
.btn.btn-outline-light.active,
.btn.btn-outline-light.focus {
	background-color: #f8f9fc !important;
}
.btn.btn-icon {
	height: 36px;
	width: 36px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0;
}
.btn.btn-icon .icons {
	height: 16px;
	width: 16px;
	font-size: 16px;
}
.btn.btn-icon.btn-lg {
	height: 48px;
	width: 48px;
	line-height: 46px;
}
.btn.btn-icon.btn-lg .icons {
	height: 20px;
	width: 20px;
	font-size: 20px;
}
.btn.btn-icon.btn-sm {
	height: 30px;
	width: 30px;
	line-height: 28px;
}
button:not(:disabled) {
	outline: none;
}
.shadow {
	box-shadow: 0 0 3px rgba(60, 72, 88, 0.15) !important;
}
.shadow-lg {
	box-shadow: 0 10px 25px rgba(60, 72, 88, 0.15) !important;
}
.shadow-md {
	box-shadow: 0 5px 13px rgba(60, 72, 88, 0.2) !important;
}
.badge {
	letter-spacing: 0.5px;
	padding: 4px 8px;
	font-weight: 600;
	line-height: 11px;
}
.badge.badge-link:hover {
	color: #fff !important;
}
.dropdown-primary .dropdown-menu .dropdown-item:hover,
.dropdown-primary .dropdown-menu .dropdown-item.active,
.dropdown-primary .dropdown-menu .dropdown-item:active,
.dropdown-primary .dropdown-menu .dropdown-item.focus,
.dropdown-primary .dropdown-menu .dropdown-item:focus {
	background-color: transparent;
	color: #2f55d4 !important;
}
.dropdown-secondary .dropdown-menu .dropdown-item:hover,
.dropdown-secondary .dropdown-menu .dropdown-item.active,
.dropdown-secondary .dropdown-menu .dropdown-item:active,
.dropdown-secondary .dropdown-menu .dropdown-item.focus,
.dropdown-secondary .dropdown-menu .dropdown-item:focus {
	background-color: transparent;
	color: #5a6d90 !important;
}
.dropdown-success .dropdown-menu .dropdown-item:hover,
.dropdown-success .dropdown-menu .dropdown-item.active,
.dropdown-success .dropdown-menu .dropdown-item:active,
.dropdown-success .dropdown-menu .dropdown-item.focus,
.dropdown-success .dropdown-menu .dropdown-item:focus {
	background-color: transparent;
	color: #2eca8b !important;
}
.dropdown-warning .dropdown-menu .dropdown-item:hover,
.dropdown-warning .dropdown-menu .dropdown-item.active,
.dropdown-warning .dropdown-menu .dropdown-item:active,
.dropdown-warning .dropdown-menu .dropdown-item.focus,
.dropdown-warning .dropdown-menu .dropdown-item:focus {
	background-color: transparent;
	color: #f17425 !important;
}
.dropdown-info .dropdown-menu .dropdown-item:hover,
.dropdown-info .dropdown-menu .dropdown-item.active,
.dropdown-info .dropdown-menu .dropdown-item:active,
.dropdown-info .dropdown-menu .dropdown-item.focus,
.dropdown-info .dropdown-menu .dropdown-item:focus {
	background-color: transparent;
	color: #17a2b8 !important;
}
.dropdown-danger .dropdown-menu .dropdown-item:hover,
.dropdown-danger .dropdown-menu .dropdown-item.active,
.dropdown-danger .dropdown-menu .dropdown-item:active,
.dropdown-danger .dropdown-menu .dropdown-item.focus,
.dropdown-danger .dropdown-menu .dropdown-item:focus {
	background-color: transparent;
	color: #e43f52 !important;
}
.dropdown-dark .dropdown-menu .dropdown-item:hover,
.dropdown-dark .dropdown-menu .dropdown-item.active,
.dropdown-dark .dropdown-menu .dropdown-item:active,
.dropdown-dark .dropdown-menu .dropdown-item.focus,
.dropdown-dark .dropdown-menu .dropdown-item:focus {
	background-color: transparent;
	color: #3c4858 !important;
}
.dropdown-muted .dropdown-menu .dropdown-item:hover,
.dropdown-muted .dropdown-menu .dropdown-item.active,
.dropdown-muted .dropdown-menu .dropdown-item:active,
.dropdown-muted .dropdown-menu .dropdown-item.focus,
.dropdown-muted .dropdown-menu .dropdown-item:focus {
	background-color: transparent;
	color: #8492a6 !important;
}
.dropdown-light .dropdown-menu .dropdown-item:hover,
.dropdown-light .dropdown-menu .dropdown-item.active,
.dropdown-light .dropdown-menu .dropdown-item:active,
.dropdown-light .dropdown-menu .dropdown-item.focus,
.dropdown-light .dropdown-menu .dropdown-item:focus {
	background-color: transparent;
	color: #f8f9fc !important;
}
.dropdown-blue .dropdown-menu .dropdown-item:hover,
.dropdown-blue .dropdown-menu .dropdown-item.active,
.dropdown-blue .dropdown-menu .dropdown-item:active,
.dropdown-blue .dropdown-menu .dropdown-item.focus,
.dropdown-blue .dropdown-menu .dropdown-item:focus {
	background-color: transparent;
	color: #2f55d4 !important;
}
.dropdown-footer .dropdown-menu .dropdown-item:hover,
.dropdown-footer .dropdown-menu .dropdown-item.active,
.dropdown-footer .dropdown-menu .dropdown-item:active,
.dropdown-footer .dropdown-menu .dropdown-item.focus,
.dropdown-footer .dropdown-menu .dropdown-item:focus {
	background-color: transparent;
	color: #202942 !important;
}
.btn-group .dropdown-toggle:after {
	content: "";
	position: relative;
	right: -4px;
	top: -2px;
	border: solid #fff;
	border-radius: 0.5px;
	border-width: 0 2px 2px 0;
	padding: 3px;
	transform: rotate(45deg);
	margin-left: 0;
	vertical-align: 0;
}
.btn-group .dropdown-menu {
	margin-top: 10px;
	border: 0;
	border-radius: 5px;
	box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);
}
.btn-group .dropdown-menu:before {
	content: "";
	position: absolute;
	top: 2px;
	left: 45px;
	box-sizing: border-box;
	border: 7px solid #495057;
	border-radius: 0.5px;
	border-color: transparent transparent #fff #fff;
	transform-origin: 0 0;
	transform: rotate(135deg);
	box-shadow: -2px 2px 2px -1px rgba(22, 28, 45, 0.15);
}
.dropdown .dropdown-toggle:after {
	display: none;
}
.alert-primary {
	background-color: rgba(47, 85, 212, 0.9);
	color: #fff;
	border-color: #2f55d4;
}
.alert-primary .alert-link {
	color: #122258;
}
.alert-outline-primary {
	background-color: #fff;
	color: #2f55d4;
	border-color: #2f55d4;
}
.alert-secondary {
	background-color: rgba(90, 109, 144, 0.9);
	color: #fff;
	border-color: #5a6d90;
}
.alert-secondary .alert-link {
	color: #1f2632;
}
.alert-outline-secondary {
	background-color: #fff;
	color: #5a6d90;
	border-color: #5a6d90;
}
.alert-success {
	background-color: rgba(46, 202, 139, 0.9);
	color: #fff;
	border-color: #2eca8b;
}
.alert-success .alert-link {
	color: #124d35;
}
.alert-outline-success {
	background-color: #fff;
	color: #2eca8b;
	border-color: #2eca8b;
}
.alert-warning {
	background-color: rgba(241, 116, 37, 0.9);
	color: #fff;
	border-color: #f17425;
}
.alert-warning .alert-link {
	color: #753208;
}
.alert-outline-warning {
	background-color: #fff;
	color: #f17425;
	border-color: #f17425;
}
.alert-info {
	background-color: rgba(23, 162, 184, 0.9);
	color: #fff;
	border-color: #17a2b8;
}
.alert-info .alert-link {
	color: #062a30;
}
.alert-outline-info {
	background-color: #fff;
	color: #17a2b8;
	border-color: #17a2b8;
}
.alert-danger {
	background-color: rgba(228, 63, 82, 0.9);
	color: #fff;
	border-color: #e43f52;
}
.alert-danger .alert-link {
	color: #79111d;
}
.alert-outline-danger {
	background-color: #fff;
	color: #e43f52;
	border-color: #e43f52;
}
.alert-dark {
	background-color: rgba(60, 72, 88, 0.9);
	color: #fff;
	border-color: #3c4858;
}
.alert-dark .alert-link {
	color: #000;
}
.alert-outline-dark {
	background-color: #fff;
	color: #3c4858;
	border-color: #3c4858;
}
.alert-muted {
	background-color: rgba(132, 146, 166, 0.9);
	color: #fff;
	border-color: #8492a6;
}
.alert-muted .alert-link {
	color: #3d4654;
}
.alert-outline-muted {
	background-color: #fff;
	color: #8492a6;
	border-color: #8492a6;
}
.alert-light {
	background-color: rgba(248, 249, 252, 0.9);
	color: #fff;
	border-color: #f8f9fc;
}
.alert-light .alert-link {
	color: #8d9dce;
}
.alert-outline-light {
	background-color: #fff;
	color: #f8f9fc;
	border-color: #f8f9fc;
}
.alert-blue {
	background-color: rgba(47, 85, 212, 0.9);
	color: #fff;
	border-color: #2f55d4;
}
.alert-blue .alert-link {
	color: #122258;
}
.alert-outline-blue {
	background-color: #fff;
	color: #2f55d4;
	border-color: #2f55d4;
}
.alert-footer {
	background-color: rgba(32, 41, 66, 0.9);
	color: #fff;
	border-color: #202942;
}
.alert-footer .alert-link {
	color: #000;
}
.alert-outline-footer {
	background-color: #fff;
	color: #202942;
	border-color: #202942;
}
.alert {
	padding: 8px 15px;
	border-radius: 5px;
	font-size: 14px;
}
.alert.alert-light {
	background-color: #fff;
	color: #3c4858;
	border-color: #e9ecef;
}
.alert.alert-dismissible {
	padding-right: 30px;
}
.alert.alert-dismissible .btn-close {
	top: 10px;
	right: 10px;
	padding: 0px;
}
.alert.alert-pills {
	border-radius: 30px;
	display: inline-block;
}
.alert.alert-pills .content {
	font-weight: 600;
}
.pages-heading .title {
	font-size: 32px !important;
	letter-spacing: 1px;
}
.position-breadcrumb {
	position: absolute;
	top: 100%;
	right: 12px;
	left: 12px;
	transform: translateY(-50%);
	text-align: center;
	z-index: 1;
}
.breadcrumb {
	letter-spacing: 0.5px;
	padding: 8px 24px;
	display: block;
}
.breadcrumb .breadcrumb-item {
	text-transform: uppercase;
	font-size: 14px;
	font-weight: 700;
	padding-left: 0;
	display: inline-block;
}
.breadcrumb .breadcrumb-item a {
	color: #3c4858;
}
.breadcrumb .breadcrumb-item a:hover {
	color: #2f55d4;
}
.breadcrumb .breadcrumb-item.active {
	color: #2f55d4;
}
.breadcrumb .breadcrumb-item:before {
	content: "";
}
.breadcrumb .breadcrumb-item:after {
	content: "\F0142" !important;
	font-size: 14px;
	color: #3c4858;
	font-family: "Material Design Icons";
	padding-left: 5px;
}
.breadcrumb .breadcrumb-item:last-child:after {
	display: none;
}
.pagination .page-item:first-child .page-link {
	border-top-left-radius: 30px;
	border-bottom-left-radius: 30px;
}
.pagination .page-item:last-child .page-link {
	border-top-right-radius: 30px;
	border-bottom-right-radius: 30px;
}
.pagination .page-item .page-link {
	color: #3c4858;
	border: 1px solid #dee2e6;
	padding: 8px 16px;
	font-size: 14px;
}
.pagination .page-item .page-link:focus {
	box-shadow: none;
}
.pagination .page-item .page-link:hover {
	color: #fff;
	background: rgba(47, 85, 212, 0.9);
	border-color: rgba(47, 85, 212, 0.9);
}
.pagination .page-item.active .page-link {
	color: #fff;
	background: #2f55d4 !important;
	border-color: #2f55d4;
	cursor: not-allowed;
}
.avatar.avatar-coin {
	height: 36px;
	width: 36px;
}
.avatar.avatar-ex-sm {
	max-height: 25px;
}
.avatar.avatar-ex-small {
	height: 36px;
	width: 36px;
}
.avatar.avatar-md-sm {
	height: 45px;
	width: 45px;
}
.avatar.avatar-small {
	height: 65px;
	width: 65px;
}
.avatar.avatar-md-md {
	height: 80px;
	width: 80px;
}
.avatar.avatar-medium {
	height: 110px;
	width: 110px;
}
.avatar.avatar-large {
	height: 140px;
	width: 140px;
}
.avatar.avatar-ex-large {
	height: 180px;
	width: 180px;
}
.accordion .accordion-item {
	overflow: hidden;
	border: 0;
	box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);
	background: transparent;
}
.accordion .accordion-item .accordion-button {
	font-weight: 600;
	text-align: left;
	box-shadow: none;
	padding: 1rem 2.5rem 1rem 1.25rem;
}
.accordion .accordion-item .accordion-button:focus {
	box-shadow: none;
}
.accordion .accordion-item .accordion-button:before {
	content: "\F0143";
	display: block;
	font-family: "Material Design Icons";
	font-size: 16px;
	color: #2f55d4;
	position: absolute;
	right: 20px;
	top: 50%;
	transform: translateY(-50%);
	transition: all 0.5s ease;
}
.accordion .accordion-item .accordion-button.collapsed {
	background-color: #fff;
	color: #3c4858 !important;
	transition: all 0.5s;
}
.accordion .accordion-item .accordion-button.collapsed:before {
	top: 15px;
	transform: rotate(180deg);
	color: #3c4858 !important;
}
.accordion .accordion-item .accordion-button:after {
	display: none;
}
.nav-pills {
	margin-bottom: 15px;
	background: #f4f6fa;
}
.nav-pills .nav-link {
	color: #495057 !important;
	padding: 5px;
	transition: all 0.5s ease;
}
.nav-pills .nav-link.nav-link-alt {
	color: #fff !important;
}
.nav-pills .nav-link.nav-link-alt.active {
	background: #3c4858 !important;
}
.nav-pills .nav-link.active {
	background: #2f55d4;
	color: #fff !important;
}
.nav-pills .nav-link.active .tab-para {
	color: rgba(255, 255, 255, 0.65) !important;
}
.progress-box .title {
	font-size: 15px;
}
.progress-box .progress {
	height: 8px;
	overflow: visible;
	background: #e9ecef;
}
.progress-box .progress .progress-bar {
	border-radius: 6px;
	animation: animate-positive 3s;
	overflow: visible !important;
}
.progress-box .progress .progress-value {
	position: absolute;
	top: -32px;
	right: -15px;
	font-size: 13px;
}
@keyframes animate-positive {
	0% {
		width: 0;
	}
}
.blockquote {
	border-left: 3px solid #dee2e6;
	border-radius: 6px;
	font-size: 16px;
}
.blockquote-wrapper .blockquote {
	position: relative;
	align-self: center;
	border: 2px solid #2f55d4;
}
.blockquote-wrapper .blockquote:after {
	content: "";
	position: absolute;
	border: 2px solid #2f55d4;
	border-radius: 0 50px 0 0;
	width: 60px;
	height: 60px;
	bottom: -60px;
	left: 50px;
	border-bottom: none;
	border-left: none;
	z-index: 3;
}
.blockquote-wrapper .blockquote:before {
	content: "";
	position: absolute;
	width: 80px;
	border: 6px solid #fff;
	bottom: -3px;
	left: 50px;
	z-index: 2;
}
.blockquote-wrapper .author {
	position: relative;
	margin-left: 150px;
}
.blockquote-wrapper .author:first-letter {
	margin-left: -12px;
}
.form-label,
.form-check-label {
	font-weight: 700;
	font-size: 14px;
}
.form-control {
	border: 1px solid #dee2e6;
	font-size: 14px;
	line-height: 26px;
	background-color: #fff;
	border-radius: 6px;
}
.form-control:focus {
	border-color: #2f55d4;
	box-shadow: none;
}
.form-control[readonly] {
	background-color: #fff;
}
.form-control:disabled {
	background-color: #dee2e6;
}
.form-check-input {
	border: 1px solid #dee2e6;
}
.form-check-input:focus {
	border-color: #2f55d4;
	box-shadow: none;
}
.form-check-input.form-check-input:checked {
	background-color: #2f55d4;
	border-color: #2f55d4;
}
.subcribe-form .btn {
	padding: 10px 20px;
}
.subcribe-form input {
	padding: 12px 20px;
	width: 100%;
	color: #3c4858 !important;
	border: none;
	outline: none !important;
	padding-right: 160px;
	padding-left: 30px;
	background-color: rgba(255, 255, 255, 0.8);
	height: 50px;
}
.subcribe-form button {
	position: absolute;
	top: 2px;
	right: 3px;
	outline: none !important;
}
.subcribe-form form {
	position: relative;
	max-width: 600px;
	margin: 0px auto;
}
.table-responsive {
	display: block;
	width: 100%;
	overflow-x: auto;
}
.table-responsive .table td,
.table-responsive .table th {
	vertical-align: middle;
}
.table-responsive .table.table-nowrap th,
.table-responsive .table.table-nowrap td {
	white-space: nowrap;
}
.table-responsive .table-center th {
	vertical-align: middle !important;
}
.table-responsive .table-center tbody tr:hover {
	color: #3c4858;
	background-color: #f8f9fa;
}
.table-responsive .table-center.invoice-tb th,
.table-responsive .table-center.invoice-tb td {
	text-align: end;
}
.position-middle-bottom {
	position: absolute;
	bottom: 15px;
	left: 12px;
	right: 12px;
	text-align: center;
}
#preloader {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-image: linear-gradient(45deg, #fff, #fff);
	z-index: 9999999;
}
#preloader #status {
	position: absolute;
	left: 0;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
}
#preloader #status .spinner {
	width: 40px;
	height: 40px;
	position: relative;
	margin: 100px auto;
}
#preloader #status .spinner .double-bounce1,
#preloader #status .spinner .double-bounce2 {
	width: 100%;
	height: 100%;
	border-radius: 50%;
	background-color: #2f55d4;
	opacity: 0.6;
	position: absolute;
	top: 0;
	left: 0;
	animation: sk-bounce 2s infinite ease-in-out;
}
#preloader #status .spinner .double-bounce2 {
	animation-delay: -1s;
}
@keyframes sk-bounce {
	0%,
	100% {
		transform: scale(0);
	}
	50% {
		transform: scale(1);
	}
}
.social-icon li a {
	color: #3c4858;
	border: 1px solid #3c4858;
	display: inline-block;
	height: 32px;
	width: 32px;
	line-height: 28px;
	text-align: center;
	transition: all 0.4s ease;
	overflow: hidden;
	position: relative;
}

.social-icon-footer li a{
	height: 52px;
	width: 52px;
	display: table-cell;
    vertical-align: middle;
    text-align: center;
}

.social-icon li a .fea-social {
	stroke-width: 2;
}
.social-icon li a:hover {
	background-color: #2f55d4;
	border-color: #2f55d4 !important;
	color: #fff !important;
}
.social-icon li a:hover .fea-social {
	fill: #2f55d4;
}
.social-icon.social li a {
	color: #adb5bd;
	border-color: #adb5bd;
}
.social-icon.foot-social-icon li a {
	color: #adb5bd;
	border-color: #283353;
}
.back-to-top {
	position: fixed;
	z-index: 99;
	bottom: 30px;
	right: 30px;
	display: none;
	transition: all 0.5s ease;
	height: 36px;
	width: 36px;
	line-height: 34px;
	border-radius: 6px;
	text-align: center;
	background: #2f55d4;
	color: #fff !important;
}
.back-to-top .icons {
	transition: all 0.5s ease;
}
.back-to-top:hover {
	transform: rotate(45deg);
}
.back-to-top:hover .icons {
	transform: rotate(-45deg) !important;
}
.back-to-home {
	position: fixed;
	top: 4%;
	right: 2%;
	z-index: 1;
}
.sticky-bar {
	position: sticky;
	top: 80px;
}
.fea {
	stroke-width: 1.8;
}
.fea.icon-sm {
	height: 16px;
	width: 16px;
}
.fea.icon-ex-md {
	height: 20px;
	width: 20px;
}
.fea.icon-m-md {
	height: 28px;
	width: 28px;
}
.fea.icon-md {
	height: 35px;
	width: 35px;
}
.fea.icon-lg {
	height: 42px;
	width: 42px;
}
.fea.icon-ex-lg {
	height: 52px;
	width: 52px;
}
[class^="uil-"]:before,
[class*=" uil-"]:before {
	margin: 0;
}
.uim-svg {
	vertical-align: 0 !important;
}
body {
	font-family: "Nunito", sans-serif;
	overflow-x: hidden !important;
	font-size: 16px;
	color: #161c2d;
}
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
	font-family: "Nunito", sans-serif;
	line-height: 1.3;
	font-weight: 600;
}
::selection {
	background: rgba(47, 85, 212, 0.9);
	color: #fff;
}
a {
	text-decoration: none !important;
}
p {
	line-height: 1.6;
}
.section-bottom{
	padding-bottom: 100px;
	position: relative;
}
.section {
	padding: 100px 0;
	position: relative;
}
@media (max-width: 768px) {
	.section {
		padding: 60px 0;
	}
}
.section-two {
	padding: 60px 0;
	position: relative;
}
.bg-overlay {
	background-color: rgba(60, 72, 88, 0.7);
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
}
.bg-overlay-white {
	background-color: rgba(255, 255, 255, 0.5);
}
.bg-gradient-primary {
	background: linear-gradient(to left, #614092 0%, #2443ac 100%);
}
.title-heading {
	line-height: 26px;
}
.title-heading .heading {
	font-size: 45px !important;
	letter-spacing: 1px;
}
@media (max-width: 768px) {
	.title-heading .heading {
		font-size: 35px !important;
	}
}
.title-heading .para-desc {
	font-size: 18px;
}
.section-title .title {
	letter-spacing: 0.5px;
	font-size: 30px !important;
}
@media (max-width: 768px) {
	.section-title .title {
		font-size: 24px !important;
	}
}
.text-shadow-title {
	text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 4px 0 rgba(255, 255, 255, 0.4),
		0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff,
		-1px 1px 0 #fff;
}
.para-desc {
	max-width: 600px;
}
.mt-100 {
	margin-top: 100px;
}
.shape {
	position: absolute;
	pointer-events: none;
	right: 0;
	bottom: -2px;
	left: 0;
}
.shape > svg {
	transform: scale(2);
	width: 100%;
	height: auto;
	transform-origin: top center;
}
.shape.integration-hero {
	clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	height: 250px;
	background: #fff;
}
@media (max-width: 768px) {
	.shape.integration-hero {
		height: 140px;
	}
}
@media (max-width: 425px) {
	.shape.integration-hero {
		height: 60px;
	}
}
@media (max-width: 425px) {
	.shape {
		bottom: -4px;
	}
}
.text-slider {
	margin: 0 auto;
	position: relative;
	overflow: hidden;
	transform: translate3d(0, 0, 0);
}
.text-slider > ul {
	white-space: nowrap;
}
.text-slider .move-text {
	animation: moveSlideshow 12s linear infinite;
}
@keyframes moveSlideshow {
	100% {
		transform: translateX(-45%);
	}
}
.mover {
	animation: mover 1s infinite alternate;
}
@keyframes mover {
	0% {
		transform: translateY(0);
	}
	100% {
		transform: translateY(5px);
	}
}
.feature-posts-placeholder {
	position: absolute;
	bottom: 0px;
	left: 0;
	right: 0;
	height: 66.6%;
}
@media (max-width: 425px) {
	.feature-posts-placeholder {
		height: 80%;
	}
}
.spin-anything {
	animation: spinner-animation 5s linear infinite;
}
@keyframes spinner-animation {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
.seo-hero-widget {
	position: relative;
	transition: all 0.5s ease;
}
.seo-hero-widget:hover {
	transform: scale(1.05);
	z-index: 9;
}
.home-wrapper:before {
	content: "";
	position: absolute;
	bottom: 40rem;
	right: 0rem;
	width: 90rem;
	height: 35rem;
	transform: rotate(78.75deg);
	background: linear-gradient(90deg, rgba(47, 85, 212, 0.3), transparent);
	z-index: 1;
}
@media (min-width: 769px) and (max-width: 1024px) {
	.home-wrapper:before {
		right: -20rem;
	}
}
@media (min-width: 426px) and (max-width: 768px) {
	.home-wrapper:before {
		right: -15rem;
		width: 70rem;
		height: 25rem;
	}
}
@media (max-width: 425px) {
	.home-wrapper:before {
		right: -25rem;
	}
}
.cookie-popup {
	position: fixed;
	bottom: 12px;
	left: 0;
	right: 0;
	margin: 0 auto;
	max-width: 512px;
	z-index: 5;
}
.cookie-popup .cookie-popup-actions button {
	border: none;
	background: none;
	padding: 0;
	cursor: pointer;
	font-weight: 600;
	position: absolute;
	top: 5px;
	right: 5px;
}
@media (max-width: 425px) {
	.cookie-popup {
		left: 12px;
		right: 12px;
	}
}
.cookie-popup-not-accepted {
	display: block;
	animation: cookie-popup-in 0.5s ease forwards;
}
.cookie-popup-accepted {
	display: none !important;
}
@keyframes cookie-popup-in {
	from {
		bottom: -6.25rem;
	}
	to {
		bottom: 1.25rem;
	}
}
.clip-text {
	font-size: 190px;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
.clip-text.clip-text-image {
	/* background-image: url("../images/01.jpg"); */
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
@media (max-width: 1024px) {
	.clip-text {
		font-size: 180px;
	}
}
@media (max-width: 768px) {
	.clip-text {
		font-size: 135px;
	}
}
@media (max-width: 425px) {
	.clip-text {
		font-size: 50px;
	}
}
@media (min-width: 768px) {
	.margin-top-100 {
		margin-top: 100px;
	}
}
@media (max-width: 768px) {
	.mt-60 {
		margin-top: 60px;
	}
}
#topnav {
	position: fixed;
	right: 0;
	left: 0;
	top: 0;
	z-index: 1;
	background-color: transparent;
	border: 0;
	transition: all 0.5s ease;
}
#topnav .logo {
	float: left;
	color: #3c4858 !important;
}
#topnav .logo .l-dark,
#topnav .logo .logo-dark-mode {
	display: none;
}
#topnav .logo .l-light,
#topnav .logo .logo-light-mode {
	display: inline-block;
}
#topnav .logo:focus {
	outline: none;
}
#topnav .has-submenu.active a {
	color: #fff;
}
#topnav .has-submenu.active .submenu li.active > a {
	color: #2f55d4 !important;
}
#topnav .has-submenu.active.active .menu-arrow {
	border-color: #2f55d4;
}
#topnav .has-submenu {
	position: relative;
}
#topnav .has-submenu .submenu {
	position: relative;
}
#topnav .has-submenu .submenu .submenu-arrow {
	border: solid #3c4858;
	border-radius: 0.5px;
	border-width: 0 2px 2px 0;
	display: inline-block;
	padding: 3px;
	transform: rotate(-45deg);
	position: absolute;
	right: 20px;
	top: 13px;
}
#topnav
	.has-submenu
	.submenu
	.has-submenu
	.submenu
	.has-submenu:hover
	.submenu-arrow {
	border-color: #2f55d4;
}
#topnav .has-submenu .submenu .has-submenu:hover > .submenu-arrow {
	border-color: #2f55d4;
}
#topnav .navbar-toggle {
	border: 0;
	position: relative;
	padding: 0;
	margin: 0;
	cursor: pointer;
}
#topnav .navbar-toggle .lines {
	width: 25px;
	display: block;
	position: relative;
	margin: 30px 0 26px 10px;
	height: 18px;
}
#topnav .navbar-toggle span {
	height: 2px;
	width: 100%;
	background-color: #3c4858;
	display: block;
	margin-bottom: 5px;
	transition: transform 0.5s ease;
}
#topnav .navbar-toggle span:last-child {
	margin-bottom: 0;
}
#topnav .buy-button {
	float: right;
	line-height: 74px;
}
#topnav .buy-button > li {
	line-height: initial;
}
#topnav .buy-button .login-btn-primary {
	display: none;
}
#topnav .buy-button .login-btn-light {
	display: inline-block;
}
#topnav .buy-button .dropdown .dropdown-toggle:after,
#topnav .buy-menu-btn .dropdown .dropdown-toggle:after {
	display: none;
}
#topnav .navbar-toggle.open span {
	position: absolute;
}
#topnav .navbar-toggle.open span:first-child {
	top: 6px;
	transform: rotate(45deg);
}
#topnav .navbar-toggle.open span:nth-child(2) {
	visibility: hidden;
}
#topnav .navbar-toggle.open span:last-child {
	width: 100%;
	top: 6px;
	transform: rotate(-45deg);
}
#topnav .navbar-toggle.open span:hover {
	background-color: #2f55d4;
}
#topnav .navbar-toggle:hover,
#topnav .navbar-toggle:focus,
#topnav .navbar-toggle .navigation-menu > li > a:hover,
#topnav .navbar-toggle:focus {
	background-color: transparent;
}
#topnav .navigation-menu {
	list-style: none;
	margin: 0;
	padding: 0;
	justify-content: end;
}
#topnav .navigation-menu > li {
	float: left;
	display: block;
	position: relative;
	margin: 0 10px;
}
#topnav .navigation-menu > li:hover > a,
#topnav .navigation-menu > li.active > a {
	color: #2f55d4 !important;
}
#topnav .navigation-menu > li > a {
	display: block;
	color: #3c4858;
	font-size: 13px;
	background-color: transparent !important;
	font-weight: 700;
	letter-spacing: 1px;
	line-height: 24px;
	text-transform: uppercase;
	font-family: "Nunito", sans-serif;
	padding-left: 15px;
	padding-right: 15px;
}
#topnav .navigation-menu > li > a:hover,
#topnav .navigation-menu > li > a:active {
	color: #2f55d4;
}
#topnav .navigation-menu > li .submenu.megamenu li .megamenu-head {
	padding: 10px 20px;
	white-space: nowrap;
	font-size: 11.5px;
	text-transform: uppercase;
	letter-spacing: 0.04em;
	font-weight: bolder;
	color: #3c4858 !important;
}
#topnav .navigation-menu .has-submenu .menu-arrow {
	border: solid #3c4858;
	border-radius: 0.5px;
	border-width: 0 2px 2px 0;
	display: inline-block;
	padding: 3px;
	transform: rotate(45deg);
	position: absolute;
	transition: all 0.5s;
	right: -1px;
	top: 30px;
}
#topnav .navigation-menu .has-submenu:hover .menu-arrow {
	transform: rotate(225deg);
}
#topnav .menu-extras {
	float: right;
}
#topnav.scroll {
	background-color: #fff;
	border: none;
	box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);
}
#topnav.scroll .navigation-menu > li > a {
	color: #3c4858;
}
#topnav.scroll .navigation-menu > li > .menu-arrow {
	border-color: #3c4858;
}
#topnav.scroll .navigation-menu > li:hover > a,
#topnav.scroll .navigation-menu > li.active > a {
	color: #2f55d4;
}
#topnav.scroll .navigation-menu > li:hover > .menu-arrow,
#topnav.scroll .navigation-menu > li.active > .menu-arrow {
	border-color: #2f55d4;
}
#topnav.defaultscroll.dark-menubar .logo {
	line-height: 70px;
}
#topnav.defaultscroll.scroll .logo {
	line-height: 62px;
}
#topnav.defaultscroll.scroll.dark-menubar .logo {
	line-height: 62px;
}
#topnav.nav-sticky {
	background: #fff;
	box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);
}
#topnav.nav-sticky .navigation-menu.nav-light > li > a {
	color: #3c4858;
}
#topnav.nav-sticky .navigation-menu.nav-light > li.active > a {
	color: #2f55d4 !important;
}
#topnav.nav-sticky .navigation-menu.nav-light > li:hover > .menu-arrow,
#topnav.nav-sticky .navigation-menu.nav-light > li.active > .menu-arrow {
	border-color: #2f55d4 !important;
}
#topnav.nav-sticky .navigation-menu.nav-light > li:hover > a,
#topnav.nav-sticky .navigation-menu.nav-light > li.active > a {
	color: #2f55d4 !important;
}
#topnav.nav-sticky .navigation-menu.nav-light .has-submenu .menu-arrow {
	border-color: #3c4858;
}
#topnav.nav-sticky.tagline-height {
	top: 0 !important;
}
#topnav.nav-sticky .buy-button .login-btn-primary {
	display: inline-block;
}
#topnav.nav-sticky .buy-button .login-btn-light {
	display: none;
}
#topnav.nav-sticky .logo .l-dark {
	display: inline-block;
}
#topnav.nav-sticky .logo .l-light {
	display: none;
}
.logo {
	font-weight: 700;
	font-size: 24px;
	margin-right: 15px;
	padding: 0 0 6px;
	letter-spacing: 1px;
	line-height: 68px;
}
@media (min-width: 1025px) {
	#topnav .navigation-menu > li .submenu.megamenu {
		width: 1116px !important;
	}
}
@media screen and (max-width: 1024px) and (min-width: 992px) {
	#topnav .navigation-menu > li .submenu.megamenu {
		width: 936px !important;
	}
}
@media (min-width: 992px) {
	#topnav .navigation-menu {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
	}
	#topnav .navigation-menu > .has-submenu:hover .menu-arrow {
		top: 33px !important;
	}
	#topnav .navigation-menu > .has-submenu.active .menu-arrow {
		top: 30px;
	}
	#topnav .navigation-menu > li .submenu {
		position: absolute;
		top: 100%;
		left: 0;
		z-index: 1000;
		padding: 15px 0;
		list-style: none;
		min-width: 180px;
		visibility: hidden;
		opacity: 0;
		margin-top: 10px;
		transition: all 0.2s ease;
		border-radius: 6px;
		background-color: #fff;
		box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);
	}
	#topnav .navigation-menu > li .submenu li {
		position: relative;
	}
	#topnav .navigation-menu > li .submenu li a {
		display: block;
		padding: 10px 20px;
		clear: both;
		white-space: nowrap;
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		font-weight: 700;
		color: #3c4858 !important;
		transition: all 0.3s;
	}
	#topnav .navigation-menu > li .submenu li a:hover {
		color: #2f55d4 !important;
	}
	#topnav .navigation-menu > li .submenu li ul {
		list-style: none;
		padding-left: 0;
		margin: 0;
	}
	#topnav .navigation-menu > li .submenu.megamenu {
		white-space: nowrap;
		left: 50%;
		transform: translateX(-50%);
		position: fixed;
		top: auto;
		display: flex;
	}
	#topnav .navigation-menu > li .submenu.megamenu > li {
		overflow: hidden;
		vertical-align: top;
		width: 20%;
	}
	#topnav .navigation-menu > li .submenu.megamenu > li .submenu {
		left: 100%;
		top: 0;
		margin-left: 10px;
		margin-top: -1px;
	}
	#topnav .navigation-menu > li .submenu > li .submenu {
		left: 101%;
		top: 0;
		margin-left: 10px;
		margin-top: -1px;
	}
	#topnav .navigation-menu > li > a {
		padding-top: 25px;
		padding-bottom: 25px;
		min-height: 62px;
	}
	#topnav .navigation-menu > li:hover > .menu-arrow {
		border-color: #2f55d4;
	}
	#topnav .navigation-menu > li:hover > a,
	#topnav .navigation-menu > li.active > a {
		color: #2f55d4 !important;
	}
	#topnav .navigation-menu > li.last-elements .submenu {
		left: auto;
		right: 0;
	}
	#topnav .navigation-menu > li.last-elements .submenu:before {
		left: auto;
		right: 10px;
	}
	#topnav
		.navigation-menu
		> li.last-elements
		.submenu
		> li.has-submenu
		.submenu {
		left: auto;
		right: 100%;
		margin-left: 0;
		margin-right: 10px;
	}
	#topnav .navigation-menu.nav-light > li > a {
		color: rgba(255, 255, 255, 0.5);
	}
	#topnav .navigation-menu.nav-light > li.active > a {
		color: #fff !important;
	}
	#topnav .navigation-menu.nav-light > li:hover > .menu-arrow {
		border-color: #fff !important;
	}
	#topnav .navigation-menu.nav-light > li:hover > a {
		color: #fff !important;
	}
	#topnav .navigation-menu.nav-light .has-submenu .menu-arrow {
		border-color: rgba(255, 255, 255, 0.5);
	}
	#topnav .navigation-menu.nav-light .has-submenu.active .menu-arrow {
		border-color: #fff !important;
	}
	#topnav .navigation-menu.nav-right {
		justify-content: flex-end !important;
	}
	#topnav .navigation-menu.nav-left {
		justify-content: flex-start !important;
	}
	#topnav .navigation-menu.nav-left > li.last-elements .submenu {
		left: 0 !important;
		right: auto !important;
	}
	#topnav .navigation-menu.nav-left > li.last-elements .submenu:before {
		left: 45px !important;
		right: auto !important;
	}
	#topnav .buy-button {
		padding-left: 15px;
		margin-left: 15px;
	}
	#topnav .navbar-toggle {
		display: none;
	}
	#topnav #navigation {
		display: block !important;
	}
	#topnav.scroll {
		top: 0;
	}
	#topnav.scroll .navigation-menu > li > a {
		padding-top: 20px;
		padding-bottom: 20px;
	}
	#topnav.scroll-active .navigation-menu > li > a {
		padding-top: 25px;
		padding-bottom: 25px;
	}
}
@media (max-width: 991px) {
	#topnav {
		background-color: #fff;
		box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);
		min-height: 74px;
	}
	#topnav .logo .l-dark {
		display: inline-block !important;
	}
	#topnav .logo .l-light {
		display: none !important;
	}
	#topnav .container {
		width: auto;
	}
	#topnav #navigation {
		max-height: 400px;
	}
	#topnav .navigation-menu {
		float: none;
	}
	#topnav .navigation-menu > li {
		float: none;
	}
	#topnav .navigation-menu > li .submenu {
		display: none;
		list-style: none;
		padding-left: 20px;
		margin: 0;
	}
	#topnav .navigation-menu > li .submenu li a {
		display: block;
		position: relative;
		padding: 7px 15px;
		text-transform: uppercase;
		font-size: 11px;
		letter-spacing: 0.04em;
		font-weight: 700;
		color: #3c4858 !important;
		transition: all 0.3s;
	}
	#topnav .navigation-menu > li .submenu.megamenu li .megamenu-head {
		padding: 7px 15px;
	}
	#topnav .navigation-menu > li .submenu.open {
		display: block;
	}
	#topnav .navigation-menu > li .submenu .submenu {
		display: none;
		list-style: none;
	}
	#topnav .navigation-menu > li .submenu .submenu.open {
		display: block;
	}
	#topnav .navigation-menu > li .submenu.megamenu > li > ul {
		list-style: none;
		padding-left: 0;
	}
	#topnav .navigation-menu > li .submenu.megamenu > li > ul > li > span {
		display: block;
		position: relative;
		padding: 10px 15px;
		text-transform: uppercase;
		font-size: 12px;
		letter-spacing: 2px;
		color: #8492a6;
	}
	#topnav .navigation-menu > li > a {
		color: #3c4858;
		padding: 10px 20px;
	}
	#topnav .navigation-menu > li > a:after {
		position: absolute;
		right: 15px;
	}
	#topnav .navigation-menu > li > a:hover,
	#topnav .navigation-menu > li .submenu li a:hover,
	#topnav .navigation-menu > li.has-submenu.open > a {
		color: #2f55d4;
	}
	#topnav .menu-extras .menu-item {
		border-color: #8492a6;
	}
	#topnav .navbar-header {
		float: left;
	}
	#topnav .buy-button .login-btn-primary {
		display: inline-block !important;
	}
	#topnav .buy-button .login-btn-light {
		display: none;
	}
	#topnav .has-submenu .submenu .submenu-arrow {
		transform: rotate(45deg);
		position: absolute;
		right: 20px;
		top: 12px;
	}
	#topnav .has-submenu.active a {
		color: #2f55d4;
	}
	#navigation {
		position: absolute;
		top: 74px;
		left: 0;
		width: 100%;
		display: none;
		height: auto;
		padding-bottom: 0;
		overflow: auto;
		border-top: 1px solid #f1f3f9;
		border-bottom: 1px solid #f1f3f9;
		background-color: #fff;
	}
	#navigation.open {
		display: block;
		overflow-y: auto;
	}
}
@media (max-width: 768px) {
	#topnav .navigation-menu .has-submenu .menu-arrow {
		right: 8px;
		top: 16px;
	}
}
@media (min-width: 768px) {
	#topnav .navigation-menu > li.has-submenu:hover > .submenu {
		visibility: visible;
		opacity: 1;
		margin-top: 0;
	}
	#topnav
		.navigation-menu
		> li.has-submenu:hover
		> .submenu
		> li.has-submenu:hover
		> .submenu {
		visibility: visible;
		opacity: 1;
		margin-left: 0;
		margin-right: 0;
	}
	#topnav
		.navigation-menu
		> li.has-submenu:hover
		> .submenu
		> li.has-submenu:hover
		> .submenu
		> li:hover
		> .submenu {
		visibility: visible;
		opacity: 1;
		margin-left: 0;
		margin-right: 0;
	}
	.navbar-toggle {
		display: block;
	}
}
@media (max-width: 425px) {
	#topnav .buy-menu-btn {
		display: block !important;
		margin: 0 10px;
		padding: 10px 20px;
	}
	#topnav .buy-menu-btn .dropdown .dropdown-menu.show {
		transform: translate3d(0px, -54px, 0px) !important;
	}
}
.tagline {
	position: absolute;
	width: 100%;
	z-index: 99;
	font-size: 14px;
	padding: 13px 0;
}
@media screen and (max-width: 575px) {
	.tagline {
		display: none;
	}
}
@media screen and (max-width: 575px) {
	.tagline-height {
		top: 0px !important;
	}
}
@media (min-width: 576px) {
	.tagline-height {
		top: 47px !important;
	}
}
.sidebar-nav {
	padding: 15px 0;
}
.sidebar-nav > .navbar-item {
	padding: 3px 15px;
}
.sidebar-nav > .navbar-item .navbar-link {
	color: #3c4858 !important;
	font-size: 15px;
	font-weight: 600;
}
.sidebar-nav > .navbar-item .navbar-link .navbar-icon {
	font-size: 18px;
	margin-right: 6px;
}
#navmenu-nav li.active a {
	color: #2f55d4;
}
#navmenu-nav li.account-menu.active .navbar-link,
#navmenu-nav li.account-menu:hover .navbar-link {
	color: #fff !important;
	background-color: #2f55d4 !important;
}
.bg-home {
	height: 100vh;
	background-size: cover;
	align-self: center;
	position: relative;
	background-position: center center;
}
.bg-home-75vh {
	height: 75vh !important;
	background-size: cover;
	align-self: center;
	position: relative;
	background-position: center center;
}
@media (max-width: 767px) {
	.bg-home-75vh {
		height: 80vh !important;
	}
}
.bg-half-260 {
	padding: 260px 0;
	background-size: cover;
	align-self: center;
	position: relative;
	background-position: center center;
}
.bg-half-170 {
	padding: 170px 0;
	background-size: cover;
	align-self: center;
	position: relative;
	background-position: center center;
}
.bg-half {
	padding: 200px 0 100px;
	background-size: cover;
	align-self: center;
	position: relative;
	background-position: center center;
}
@media (max-width: 768px) {
	.bg-half {
		padding: 160px 0 60px;
	}
}
.bg-auth-home {
	padding: 142px 0;
	background-size: cover;
	align-self: center;
	position: relative;
	background-position: center center;
}
.bg-circle-gradiant {
	background: radial-gradient(
		circle at 50% 50%,
		rgba(47, 85, 212, 0.1) 0%,
		rgba(47, 85, 212, 0.1) 33.333%,
		rgba(47, 85, 212, 0.2) 33.333%,
		rgba(47, 85, 212, 0.2) 66.666%,
		rgba(47, 85, 212, 0.3) 66.666%,
		rgba(47, 85, 212, 0.3) 99.999%
	);
}
.it-home {
	animation: slideleft 20000s infinite linear;
}
@keyframes slideleft {
	from {
		background-position: 0%;
	}
	to {
		background-position: 90000%;
	}
}
.home-dashboard img {
	position: relative;
	top: 60px;
	z-index: 1;
}
@media (min-width: 768px) {
	.home-dashboard.onepage-hero {
		overflow: hidden;
	}
}
.classic-saas-image .bg-saas-shape:after {
	bottom: 3rem;
	left: 0;
	width: 75rem;
	height: 55rem;
	border-radius: 20rem;
}
@media (max-width: 767px) {
	.classic-saas-image .bg-saas-shape:after {
		left: 10rem;
		width: 30rem;
		height: 30rem;
		border-radius: 10rem;
	}
}
@media (max-width: 768px) {
	.classic-saas-image .bg-saas-shape img,
	.freelance-hero .bg-shape img {
		max-width: 550px;
	}
}
@media (max-width: 767px) {
	.classic-saas-image .bg-saas-shape img,
	.freelance-hero .bg-shape img {
		max-width: 100%;
		height: auto;
	}
}
.classic-saas-image .bg-saas-shape:after,
.freelance-hero .bg-shape:after {
	opacity: 0.9;
	transform: rotate(130deg);
}
@media (max-width: 767px) {
	.classic-saas-image .bg-saas-shape:after,
	.freelance-hero .bg-shape:after {
		bottom: -5rem !important;
		height: 30rem;
	}
}
.freelance-hero .bg-shape:after {
	bottom: 0rem;
	left: 7rem;
	width: 100rem;
	height: 70rem;
	border-radius: 6rem;
}
@media (max-width: 768px) {
	.freelance-hero .bg-shape:after {
		bottom: -10rem;
	}
}
@media (max-width: 767px) {
	.freelance-hero .bg-shape:after {
		left: 15rem;
		width: 40rem;
		height: 30rem;
	}
}
.freelance-hero .bg-shape:after {
	box-shadow: 0 0 40px rgba(47, 85, 212, 0.5);
	background-color: #99abea;
}
.studio-home {
	padding: 7%;
}
.agency-wrapper:before {
	content: "";
	position: absolute;
	bottom: 42rem;
	right: 54rem;
	width: 20rem;
	height: 25rem;
	border-radius: 50%;
	transform: rotate(45deg);
	/* background-color: #f8f9fc; */
	background-color: rgba(47, 85, 212, 0.1);
	z-index: -1;
}

.agency-wrapper-2:before {
	content: "";
	position: absolute;
	bottom: 8rem;
	right: 84rem;
	width: 36rem;
	height: 30rem;
	border-radius: 50%;
	transform: rotate(45deg);
	/* background-color: #f8f9fc; */
	background-color: rgba(47, 85, 212, 0.1);
	z-index: -1;
}

@media (max-width: 768px) {
	.agency-wrapper:before {
		right: 12rem;
	}
}
@media (max-width: 767px) {
	.agency-wrapper:before {
		right: 0;
	}
}
.bg-marketing {
	padding: 76px 0 120px;
	background-size: cover;
	align-self: center;
	position: relative;
	background-position: center center;
}
.home-slider .carousel-control-next,
.home-slider .carousel-control-prev {
	width: 30px;
	height: 30px;
	top: 50%;
	transform: translateY(-50%);
	border-radius: 30px;
	border: 1px solid #ced4da;
}
.home-slider .carousel-control-next-icon,
.home-slider .carousel-control-prev-icon {
	width: 30%;
}
.home-slider .carousel-control-next {
	right: 8px;
}
.home-slider .carousel-control-prev {
	left: 8px;
}
.carousel-indicators [data-bs-target] {
	width: 10px;
	height: 10px;
	border-radius: 3px;
	transition: all 0.5s ease;
	border: 0;
	background: #2f55d4 !important;
	margin: auto 4px;
}
.carousel-indicators .active {
	background-color: #2f55d4 !important;
	transform: rotate(45deg);
}
.bg-animation-left:after {
	content: "";
	position: absolute;
	left: 0px;
	top: 0px;
	width: 70%;
	height: 100%;
	background: rgba(255, 255, 255, 0.85);
	clip-path: polygon(0 0, 90% 0, 70% 100%, 0% 100%);
}
@media (max-width: 767px) {
	.bg-animation-left:after {
		width: 100%;
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
	}
}
.bg-animation-left.dark-left:after {
	background: rgba(60, 72, 88, 0.6);
}
.bg-animation-left.crypto-home:after {
	background: #2f55d4;
	width: 80%;
	clip-path: polygon(0 0, 100% 0, 50% 100%, 0% 100%);
}
.bg-animation-left.task-management-home:after {
	/* background: url("../images/bg.png") #2f55d4; */
	width: 100%;
	clip-path: circle(65% at 40% 25%);
}
.bg-invoice {
	padding: 100px 0;
	background-size: cover;
	align-self: center;
	position: relative;
	background-position: center center;
}
.classic-app-image .bg-app-shape:after {
	bottom: 3rem;
	left: -8rem;
	width: 55rem;
	height: 35rem;
	border-radius: 20rem;
	transform: rotate(120deg);
	opacity: 0.9;
}
.classic-app-image .app-images {
	position: absolute;
	bottom: 60px;
	right: -20px;
}
.classic-app-image .bg-app-shape:after,
.classic-saas-image .bg-saas-shape:after,
.freelance-hero .bg-shape:after {
	content: " ";
	position: absolute;
	z-index: -1;
}
.classic-app-image .bg-app-shape:after,
.classic-saas-image .bg-saas-shape:after {
	box-shadow: 0 0 40px rgba(47, 85, 212, 0.5);
	background-color: #2f55d4;
}
.shape-before .shape-img {
	position: absolute;
	top: -50px;
	left: -35px;
	z-index: -1;
	height: auto;
	overflow: hidden;
}
.swiper-slider-hero .swiper-container,
.swiper-slider-hero .swiper-slide .slide-inner {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}
.swiper-slider-hero .swiper-container .swiper-button-prev,
.swiper-slider-hero .swiper-container .swiper-button-next {
	background: transparent;
	width: 35px;
	height: 35px;
	line-height: 35px;
	margin-top: -30px;
}
.swiper-slider-hero .swiper-container .swiper-button-prev:before,
.swiper-slider-hero .swiper-container .swiper-button-next:before {
	font-family: "Material Design Icons";
	font-weight: 900;
	color: #fff;
}
.swiper-slider-hero .swiper-container .swiper-button-prev:hover,
.swiper-slider-hero .swiper-container .swiper-button-next:hover {
	background: #2f55d4;
	border-color: #2f55d4 !important;
}
.swiper-slider-hero .swiper-container .swiper-button-prev {
	left: 10px;
}
.swiper-slider-hero .swiper-container .swiper-button-prev:before {
	content: "\f0141";
}
.swiper-slider-hero .swiper-container .swiper-button-next {
	right: 10px;
}
.swiper-slider-hero .swiper-container .swiper-button-next:before {
	content: "\f0142";
}
.swiper-slider-hero .swiper-pagination-bullet {
	color: #f8f9fa;
	background: transparent;
}
.swiper-slider-hero .swiper-pagination-bullet-active {
	color: #fff;
}
.swiper-slider-hero .swiper-container-horizontal > .swiper-pagination-bullets,
.swiper-slider-hero .swiper-pagination-custom,
.swiper-slider-hero .swiper-pagination-fraction {
	bottom: 45px;
}
.swiper-slider-hero
	.swiper-container-horizontal
	> .swiper-pagination-bullets
	.swiper-pagination-bullet {
	margin: 0 13px;
}
@media (min-width: 769px) {
	.bg-studio:after {
		content: "";
		position: absolute;
		right: 0px;
		top: 0px;
		width: 50%;
		height: 100%;
		background: #fff none repeat scroll 0 0;
		z-index: 2;
	}
}
@media (max-width: 767px) {
	.bg-home,
	.bg-half-170,
	.bg-half-260,
	.bg-marketing,
	.swiper-slider-hero .swiper-container .swiper-slide {
		padding: 150px 0;
		height: auto;
	}
}
.features .icon {
	background: rgba(47, 85, 212, 0.1);
}
.features .image:before {
	content: "";
	position: absolute;
	bottom: 5px;
	left: 5px;
	width: 64px;
	height: 64px;
	border-radius: 6px;
	transform: rotate(33.75deg);
	background: linear-gradient(45deg, transparent, rgba(47, 85, 212, 0.1));
}
.features.feature-clean .icons i {
	height: 65px;
	width: 65px;
	line-height: 65px;
	background-color: rgba(47, 85, 212, 0.1);
}
.features.feature-clean .title:hover {
	color: #2f55d4 !important;
}
.features .ride-image {
	transform: rotate(-45deg);
}
.features .ride-image img {
	border-radius: 100% 100% 100% 0;
}
.features:hover .image:before {
	background: rgba(47, 85, 212, 0.1);
	animation: spinner-border 5s linear infinite !important;
}
.features.fea-primary {
	transition: all 0.5s ease;
}
.features.fea-primary .big-icon {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 0;
	right: 0;
	opacity: 0.015;
	font-size: 180px;
}
.features.fea-primary:hover {
	box-shadow: 0 10px 25px rgba(60, 72, 88, 0.15);
	background-color: #2f55d4 !important;
	color: #fff !important;
}
.features.fea-primary:hover .icon2,
.features.fea-primary:hover .para {
	color: rgba(255, 255, 255, 0.5) !important;
}
.features.fea-primary:hover .content,
.features.fea-primary:hover .icon2 {
	z-index: 2;
}
.features.fea-primary:hover .big-icon {
	opacity: 0.05;
}
.features.fea-primary:hover .readmore {
	color: #fff !important;
}
.features .title,
.key-feature .title {
	font-size: 18px !important;
}
.features .icon,
.key-feature .icon {
	height: 45px;
	width: 45px;
	line-height: 45px;
}
.key-feature {
	transition: all 0.3s ease;
}
.key-feature .icon {
	background: linear-gradient(45deg, transparent, rgba(47, 85, 212, 0.15));
}
.key-feature:hover {
	transform: scale(1.05);
	box-shadow: 0 5px 13px rgba(60, 72, 88, 0.2) !important;
}
.work-process {
	transition: all 0.5s ease;
}
.work-process .step,
.work-process .step-icon {
	opacity: 0.06;
}
.work-process a {
	font-size: 15px;
}
.work-process.process-arrow:after {
	content: "";
	position: absolute;
	width: 60%;
	height: 40px;
	top: 30px;
	left: 80%;
	/* background: url("../images/process.png") center center no-repeat; */
	z-index: 1;
}
@media (max-width: 767px) {
	.work-process.process-arrow:after {
		display: none;
	}
}
.work-process.process-arrow:hover {
	transform: none !important;
}
.work-process:hover {
	transform: translateY(-10px);
}
.work-process.d-none-arrow:hover {
	transform: none !important;
}
.course-feature {
	transition: all 0.5s ease;
}
.course-feature .full-img {
	position: absolute;
	bottom: 50%;
	transform: translateY(50%);
	left: 0;
	right: 0;
	opacity: 0;
	margin: 0 auto;
	z-index: -2;
	transition: all 0.5s ease;
	font-size: 250px;
}
.course-feature:hover {
	transform: translateY(-10px);
}
.course-feature:hover .full-img {
	opacity: 0.05;
}
.features-absolute {
	position: relative;
	z-index: 2;
	transition: all 0.5s ease;
}
.features-absolute {
	margin: -200px 0 0px;
}
@media (max-width: 768px) {
	.features-absolute {
		margin: -140px 0 0;
	}
}
.features-absolute.blog-search {
	margin: -120px 0 0px;
}
@media (max-width: 768px) {
	.features-absolute.blog-search {
		margin: -90px 0 0px;
	}
}
.categories {
	transition: all 0.5s ease;
}
.categories:hover {
	transform: translateY(-10px);
	box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);
}
.categories a:hover {
	color: #2f55d4 !important;
}
.app-feature-shape-right:after,
.app-feature-shape-left:after {
	bottom: 0rem;
	width: 30rem;
	height: 40rem;
	border-radius: 10rem;
}
.app-feature-shape-right:after {
	left: 10rem;
	transform: rotate(150deg);
}
@media (max-width: 768px) {
	.app-feature-shape-right:after {
		left: 0;
	}
}
.app-feature-shape-left:after {
	right: 10rem;
	transform: rotate(210deg);
}
@media (max-width: 768px) {
	.app-feature-shape-left:after {
		right: 0;
	}
}
.app-subscribe {
	position: absolute;
	top: -200px;
}
@media (max-width: 767px) {
	.app-subscribe {
		position: relative;
		top: 0;
	}
}
.saas-feature-shape-left:after,
.saas-feature-shape-right:after {
	bottom: -3rem;
	width: 35rem;
	height: 35rem;
	border-radius: 15rem;
	transform: rotate(145deg);
}
@media (max-width: 767px) {
	.saas-feature-shape-left:after,
	.saas-feature-shape-right:after {
		bottom: -1rem;
		width: 25rem;
		height: 25rem;
		border-radius: 10rem;
	}
}
.saas-feature-shape-left:after {
	left: -10rem;
}
.saas-feature-shape-right:after {
	right: -10rem;
}
.app-feature-shape-right:after,
.app-feature-shape-left:after,
.saas-feature-shape-left:after,
.saas-feature-shape-right:after,
.social-feature-left:after,
.social-feature-right:after {
	background: rgba(47, 85, 212, 0.1);
	box-shadow: 0 0 40px rgba(47, 85, 212, 0.1);
}
.app-feature-shape-right:after,
.app-feature-shape-left:after,
.saas-feature-shape-left:after,
.saas-feature-shape-right:after,
.social-feature-left:after,
.social-feature-right:after {
	content: "";
	position: absolute;
	z-index: -1;
}
.social-feature-left:after,
.social-feature-right:after {
	width: 450px;
	height: 520px;
	border-radius: 30px;
	bottom: -75px;
}
@media (max-width: 768px) {
	.social-feature-left:after,
	.social-feature-right:after {
		width: 300px;
		height: 400px;
		bottom: -65px;
	}
}
@media (max-width: 575px) {
	.social-feature-left:after,
	.social-feature-right:after {
		bottom: -35px;
	}
}
.social-feature-left:after {
	right: -200px;
}
@media (max-width: 575px) {
	.social-feature-left:after {
		right: 60px;
	}
}
.social-feature-right:after {
	left: -200px;
}
@media (max-width: 575px) {
	.social-feature-right:after {
		left: 60px;
	}
}
.explore-feature {
	transition: all 0.5s ease;
}
.explore-feature .icon {
	height: 80px;
	width: 80px;
	line-height: 80px;
	transition: all 0.5s ease;
}
.explore-feature:hover {
	box-shadow: 0 10px 25px rgba(60, 72, 88, 0.15) !important;
}
.explore-feature:hover .icon,
.explore-feature:hover .title {
	color: #2f55d4 !important;
}
.construction-img {
	position: absolute;
	bottom: 0;
	right: 20px;
}
.client-testi {
	cursor: e-resize;
}
.client-testi .client-image {
	margin-right: 16px;
}
.client-testi .content:before {
	content: "";
	position: absolute;
	top: 30px;
	left: 0;
	margin-left: 13px;
	box-sizing: border-box;
	border: 8px solid #3c4858;
	border-color: transparent #fff #fff transparent;
	transform-origin: 0 0;
	transform: rotate(135deg);
	box-shadow: 2px 2px 2px -1px rgba(60, 72, 88, 0.15);
}
.tns-nav {
	text-align: center;
	margin-top: 10px;
}
.tns-nav button {
	border-radius: 3px;
	background: rgba(47, 85, 212, 0.5) !important;
	transition: all 0.5s ease;
	border: none;
	margin: 0 5px;
	padding: 5px;
}
.tns-nav button.tns-nav-active {
	background: #2f55d4 !important;
	transform: rotate(45deg);
}
.tns-controls button[data-controls="prev"],
.tns-controls button[data-controls="next"] {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	font-size: 16px;
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background: #fff;
	color: #3c4858;
	border: none;
	transition: all 0.5s ease;
	z-index: 1;
	box-shadow: 0 10px 25px rgba(60, 72, 88, 0.15);
}
.tns-controls button[data-controls="prev"]:hover,
.tns-controls button[data-controls="next"]:hover {
	background: #2f55d4;
	color: #fff;
}
.tns-controls button[data-controls="prev"] {
	left: 0;
}
.tns-controls button[data-controls="next"] {
	right: 0;
}
.slick-slider {
	overflow-x: hidden !important;
	cursor: pointer;
}
.tiny-timeline {
	position: relative;
	width: 100%;
	margin: 0 auto;
}
.tiny-timeline:before {
	content: "";
	position: absolute;
	width: 100%;
	top: 17px;
	left: 0;
	height: 2px;
	background: #2f55d4;
}
.tiny-timeline .item-box {
	margin: 70px 15px 20px;
}
.tiny-timeline .item-box:before,
.tiny-timeline .item-box:after {
	content: "";
	position: absolute;
	left: 50%;
	background: #2f55d4;
}
.tiny-timeline .item-box:before {
	width: 2px;
	height: 46px;
	top: -46px;
	transform: translateX(-50%);
}
.tiny-timeline .item-box:after {
	width: 13px;
	height: 13px;
	top: -59px;
	border-radius: 3px;
	transform: translateX(-50%) rotate(45deg);
}
.pricing-rates {
	position: relative;
	z-index: 1;
	border-bottom: 3px solid #adb5bd !important;
	transition: all 0.5s ease;
}
.pricing-rates .price {
	font-weight: 400;
}
.pricing-rates.business-rate:hover {
	transform: scale(1.03);
	z-index: 2;
	border-color: #2f55d4 !important;
	box-shadow: 0 5px 13px rgba(60, 72, 88, 0.2) !important;
	background-color: #fff !important;
}
.pricing-rates.business-rate:hover .title {
	color: #2f55d4;
}
.pricing-rates.starter-plan {
	transform: scale(1.05);
	z-index: 2;
	border-color: #2f55d4 !important;
}
@media (max-width: 767px) {
	.pricing-rates.starter-plan {
		transform: scale(1);
	}
}
.pricing-rates.best-plan:hover {
	transform: translateY(-10px);
}
.ribbon.ribbon-primary span {
	background-color: #2f55d4 !important;
}
.ribbon.ribbon-primary span:before {
	border-left-color: #2443ac;
	border-top-color: #2443ac;
}
.ribbon.ribbon-primary span:after {
	border-right-color: #2443ac;
	border-top-color: #2443ac;
}
.ribbon.ribbon-secondary span {
	background-color: #5a6d90 !important;
}
.ribbon.ribbon-secondary span:before {
	border-left-color: #465571;
	border-top-color: #465571;
}
.ribbon.ribbon-secondary span:after {
	border-right-color: #465571;
	border-top-color: #465571;
}
.ribbon.ribbon-success span {
	background-color: #2eca8b !important;
}
.ribbon.ribbon-success span:before {
	border-left-color: #25a06e;
	border-top-color: #25a06e;
}
.ribbon.ribbon-success span:after {
	border-right-color: #25a06e;
	border-top-color: #25a06e;
}
.ribbon.ribbon-warning span {
	background-color: #f17425 !important;
}
.ribbon.ribbon-warning span:before {
	border-left-color: #d55b0e;
	border-top-color: #d55b0e;
}
.ribbon.ribbon-warning span:after {
	border-right-color: #d55b0e;
	border-top-color: #d55b0e;
}
.ribbon.ribbon-info span {
	background-color: #17a2b8 !important;
}
.ribbon.ribbon-info span:before {
	border-left-color: #117a8b;
	border-top-color: #117a8b;
}
.ribbon.ribbon-info span:after {
	border-right-color: #117a8b;
	border-top-color: #117a8b;
}
.ribbon.ribbon-danger span {
	background-color: #e43f52 !important;
}
.ribbon.ribbon-danger span:before {
	border-left-color: #d21e32;
	border-top-color: #d21e32;
}
.ribbon.ribbon-danger span:after {
	border-right-color: #d21e32;
	border-top-color: #d21e32;
}
.ribbon.ribbon-dark span {
	background-color: #3c4858 !important;
}
.ribbon.ribbon-dark span:before {
	border-left-color: #272f3a;
	border-top-color: #272f3a;
}
.ribbon.ribbon-dark span:after {
	border-right-color: #272f3a;
	border-top-color: #272f3a;
}
.ribbon.ribbon-muted span {
	background-color: #8492a6 !important;
}
.ribbon.ribbon-muted span:before {
	border-left-color: #68788f;
	border-top-color: #68788f;
}
.ribbon.ribbon-muted span:after {
	border-right-color: #68788f;
	border-top-color: #68788f;
}
.ribbon.ribbon-light span {
	background-color: #f8f9fc !important;
}
.ribbon.ribbon-light span:before {
	border-left-color: #d4daed;
	border-top-color: #d4daed;
}
.ribbon.ribbon-light span:after {
	border-right-color: #d4daed;
	border-top-color: #d4daed;
}
.ribbon.ribbon-blue span {
	background-color: #2f55d4 !important;
}
.ribbon.ribbon-blue span:before {
	border-left-color: #2443ac;
	border-top-color: #2443ac;
}
.ribbon.ribbon-blue span:after {
	border-right-color: #2443ac;
	border-top-color: #2443ac;
}
.ribbon.ribbon-footer span {
	background-color: #202942 !important;
}
.ribbon.ribbon-footer span:before {
	border-left-color: #0f131f;
	border-top-color: #0f131f;
}
.ribbon.ribbon-footer span:after {
	border-right-color: #0f131f;
	border-top-color: #0f131f;
}
.ribbon {
	position: absolute;
	top: -5px;
	width: 75px;
	height: 75px;
	z-index: 2;
}
.ribbon.ribbon-right {
	right: -5px;
}
.ribbon.ribbon-right span {
	right: -23px;
	transform: rotate(45deg);
}
.ribbon.ribbon-left {
	left: -5px;
}
.ribbon.ribbon-left span {
	left: -21px;
	transform: rotate(-45deg);
}
.ribbon span {
	position: absolute;
	top: 18px;
	width: 100px;
	color: #fff;
}
.ribbon span:before,
.ribbon span:after {
	content: "";
	position: absolute;
	top: 100%;
	z-index: -1;
	border: 3px solid transparent;
}
.ribbon span:before {
	left: 0;
}
.ribbon span:after {
	right: 0;
}
.invoice-top .logo-invoice {
	font-weight: 700;
	font-size: 27px;
	letter-spacing: 1px;
}
.crypto-chart {
	position: absolute;
	left: 24px;
	right: 24px;
	bottom: 24px;
	opacity: 0.1;
	z-index: 0;
}
.calculator-block {
	background-color: #fff;
}
.calculator-block .cryptonatorwidget {
	border: none !important;
	padding: 0 !important;
	background: #f8f9fc !important;
}
.calculator-block .cryptonatorwidget input,
.calculator-block .cryptonatorwidget select {
	height: 40px !important;
	line-height: 40px !important;
	margin-bottom: 0;
	border: none;
	background-color: #f8f9fc !important;
	border: none;
	outline: none;
	box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);
	padding: 8px 12px;
	border-radius: 6px;
	background-color: transparent;
	color: #8492a6;
	font-family: "Nunito", sans-serif !important;
}
.calculator-block .cryptonatorwidget div:last-child {
	display: none;
}
.calculator-block ::-webkit-input-placeholder {
	color: #8492a6;
	text-transform: capitalize;
}
.calculator-block ::-moz-placeholder {
	color: #8492a6;
	text-transform: capitalize;
}
.calculator-block :-ms-input-placeholder {
	color: #8492a6;
	text-transform: capitalize;
}
.calculator-block :-moz-placeholder {
	color: #8492a6;
	text-transform: capitalize;
}
.apexcharts-tooltip {
	background: #161c2d !important;
	color: #f8f9fc;
}
.switcher-pricing .toggle,
.switcher-pricing .toggler {
	display: inline-block;
	vertical-align: middle;
}
.switcher-pricing .toggler {
	transition: all 0.5s ease;
	font-weight: bold;
}
.switcher-pricing .toggler--is-active {
	color: #2f55d4 !important;
}
.switcher-pricing .form-switch .form-check-input {
	width: 48px;
	height: 24px;
	margin-top: 0;
}
.hide {
	display: none;
}
.bg-cta {
	padding: 150px 0;
}
.play-btn {
	height: 78px;
	width: 78px;
	font-size: 30px;
	line-height: 76px;
	border-radius: 50%;
	display: inline-block;
	color: #fff;
}
.play-icon {
	position: absolute;
	bottom: 50%;
	transform: translateY(50%);
	right: 0;
	left: 0;
	text-align: center;
}
.play-icon i {
	height: 75px;
	-webkit-text-stroke: 2px #2f55d4;
	-webkit-text-fill-color: transparent;
	width: 75px;
	font-size: 25px;
	line-height: 75px;
	display: inline-block;
}
.play-icon i:hover {
	-webkit-text-stroke: 2px #2f55d4;
	-webkit-text-fill-color: #2f55d4;
}
@media (max-width: 767px) {
	iframe {
		width: auto !important;
	}
}
.blog {
	transition: all 0.3s ease;
}
.blog .content h4 {
	line-height: 1.2;
}
.blog .content .title {
	transition: all 0.5s ease;
}
.blog .content .title:hover {
	color: #2f55d4 !important;
}
.blog .content .post-meta .like,
.blog .content .post-meta .comments,
.blog .content .post-meta .readmore {
	font-size: 15px;
	transition: all 0.5s ease;
}
.blog .content .post-meta .like:hover {
	color: #e43f52 !important;
}
.blog .content .post-meta .comments:hover {
	color: #2eca8b !important;
}
.blog .content .post-meta .readmore:hover {
	color: #2f55d4 !important;
}
.blog .content .link {
	color: #2f55d4 !important;
}
.blog .author,
.blog .teacher,
.blog .course-fee {
	position: absolute;
	z-index: 1;
	opacity: 0;
	transition: all 0.5s ease;
}
.blog .author {
	top: 5%;
	left: 5%;
}
.blog .teacher {
	bottom: 6%;
	left: 5%;
}
.blog .course-fee {
	bottom: -5%;
	right: 5%;
	width: 50px;
	height: 50px;
}
.blog .course-fee .fee {
	line-height: 50px;
}
.blog.blog-detail:hover {
	transform: translateY(0px) !important;
}
.blog .overlay {
	background: #3c4858;
}
.blog:hover {
	transform: translateY(-10px);
}
.blog:hover .overlay {
	opacity: 0.4;
}
.blog:hover .author,
.blog:hover .teacher,
.blog:hover .course-fee {
	opacity: 1;
}
.blog .blog-list-meta {
	position: absolute;
	bottom: 24px;
}
.sidebar .widget .blog-categories li {
	padding-bottom: 10px;
}
.sidebar .widget .blog-categories li:last-child {
	padding-bottom: 0;
}
.sidebar .widget .blog-categories li a,
.sidebar .widget .blog-categories li span {
	font-size: 15px;
}
.sidebar .widget .blog-categories li a {
	color: #3c4858;
	transition: all 0.5s ease;
}
.sidebar .widget .blog-categories li a:hover {
	color: #2f55d4;
}
.sidebar .widget .post-recent {
	padding-bottom: 15px;
}
.sidebar .widget .post-recent:last-child {
	padding-bottom: 0;
}
.sidebar .widget .post-recent .post-recent-thumb {
	width: 25%;
}
.sidebar .widget .post-recent .post-recent-content {
	width: 75%;
	padding-left: 10px;
}
.sidebar .widget .post-recent .post-recent-content a {
	display: block;
	color: #3c4858;
	font-size: 15px;
	transition: all 0.5s ease;
}
.sidebar .widget .post-recent .post-recent-content a:hover {
	color: #2f55d4;
}
.sidebar .widget .post-recent .post-recent-content span {
	font-size: 13px;
}
.tagcloud > a {
	background: #e9ecef;
	color: #3c4858;
	display: inline-block;
	font-size: 9px;
	letter-spacing: 1px;
	margin: 5px 10px 5px 0;
	padding: 8px 12px 7px;
	text-transform: uppercase;
	transition: all 0.5s ease;
	font-weight: 600;
}
.tagcloud > a:hover {
	background: #2f55d4;
	color: #fff;
}
.media-list .media .media-heading:hover {
	color: #2f55d4 !important;
}
.media-list .sub-comment {
	border-left: 2px dashed #dee2e6;
}
.blog .overlay,
.job-box .job-overlay {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	opacity: 0;
	transition: all 0.5s ease;
}
.job-box {
	transition: all 0.5s ease;
}
.job-box .job-overlay {
	opacity: 0.6;
}
.job-box .head {
	position: absolute;
	top: 15px;
	right: 15px;
}
.job-box .position {
	position: absolute;
	top: 15px;
	left: 15px;
}
.job-box .position a {
	transition: all 0.5s ease;
}
.job-box .position a:hover {
	color: #2f55d4 !important;
}
.job-box .firm-logo {
	position: absolute;
	left: 0;
	right: 0;
	height: 60px;
	width: 60px;
	line-height: 60px;
	margin: 0 auto;
	top: -30px;
}
.job-box .company-name {
	transition: all 0.5s ease;
}
.job-box .company-name:hover {
	color: #2f55d4 !important;
}
.job-box:hover {
	transform: translateY(-5px);
}
.candidate-list .like {
	-webkit-text-stroke: 1px #8492a6;
	-webkit-text-fill-color: transparent;
}
.candidate-list .like:hover,
.candidate-list .like:focus {
	-webkit-text-stroke: #e43f52;
	-webkit-text-fill-color: #e43f52;
}
.candidate-list,
.company-list {
	transition: all 0.5s ease;
}
.candidate-list .name:hover,
.company-list .name:hover {
	color: #2f55d4 !important;
}
.candidate-list:hover,
.company-list:hover {
	box-shadow: 0 5px 13px rgba(60, 72, 88, 0.2) !important;
	transform: translateY(-5px);
}
@media (min-width: 1024px) {
	.job-profile {
		top: -378px;
	}
}
@media (min-width: 768px) and (max-width: 1023px) {
	.job-profile {
		top: -338px;
	}
}
@media (max-width: 767px) {
	.company-logo {
		float: none !important;
		text-align: left !important;
	}
}
.work-container.work-classic .work-image {
	transition: all 0.5s ease;
}
.work-container.work-classic .work-image:hover {
	box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);
}
.work-container.work-classic .content .title,
.work-container.work-grid .content .title,
.work-container.work-modern .content .title {
	font-size: 18px;
	transition: all 0.5s ease;
}
.work-container.work-classic .content .title:hover,
.work-container.work-grid .content .title:hover,
.work-container.work-modern .content .title:hover {
	color: #2f55d4 !important;
}
.work-container.work-classic .content .tag,
.work-container.work-grid .content .tag,
.work-container.work-modern .content .tag {
	font-size: 15px !important;
}
.work-container.work-modern img,
.work-container.work-modern .overlay-work,
.work-container.work-modern .content,
.work-container.work-modern .client,
.work-container.work-modern .read_more,
.work-container.work-modern .icons,
.work-container.work-modern .icons .work-icon {
	transition: all 0.5s ease;
}
.work-container.work-modern .overlay-work,
.work-container.work-modern .content,
.work-container.work-modern .client,
.work-container.work-modern .read_more,
.work-container.work-modern .icons {
	position: absolute;
}
.work-container.work-modern .overlay-work {
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	opacity: 0;
	z-index: 1;
}
.work-container.work-modern .content {
	z-index: 1;
	bottom: 5%;
	left: 5%;
}
.work-container.work-modern .content,
.work-container.work-modern .client {
	opacity: 0;
}
.work-container.work-modern .client,
.work-container.work-modern .read_more {
	z-index: 1;
	right: 5%;
	top: 5%;
}
.work-container.work-modern .read_more {
	height: 30px;
	width: 30px;
	line-height: 30px;
}
.work-container.work-modern .icons {
	right: 0;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	z-index: 2;
	opacity: 0;
}
.work-container.work-modern .icons .work-icon {
	height: 45px;
	width: 45px;
	line-height: 45px;
}
.work-container.work-modern .icons .work-icon:hover {
	background: #2f55d4 !important;
	color: #fff !important;
}
.work-container.work-modern:hover img {
	transform: scale(1.1) rotate(3deg);
}
.work-container.work-modern:hover .overlay-work {
	opacity: 0.65;
}
.work-container.work-modern:hover .icons {
	opacity: 1;
}
.work-container.work-modern:hover .personal-port,
.work-container.work-modern:hover .content,
.work-container.work-modern:hover .client {
	opacity: 1;
}
.work-container.work-grid {
	transition: all 0.5s ease;
}
.work-container.work-grid img,
.work-container.work-grid .content,
.work-container.work-grid .content .title {
	transition: all 0.5s ease;
}
.work-container.work-grid .content {
	position: absolute;
	bottom: 0;
	right: 0;
	left: 0;
	transform: translateY(150px);
	overflow: hidden;
}
.work-container.work-grid:hover {
	box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);
}
.work-container.work-grid:hover img {
	transform: translateY(-40px);
}
.work-container.work-grid:hover .content {
	transform: translateY(0);
}
.work-details ul li b {
	max-width: 90px;
	width: 100%;
	display: inline-block;
}
.courses-desc img {
	transition: all 0.5s ease;
}
.courses-desc:hover img {
	transform: scale(1.1) rotate(3deg);
}
.courses-desc .overlay-work,
.popular-tour .overlay-work {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	opacity: 0;
	transition: all 0.5s ease;
}
.courses-desc:hover .overlay-work,
.popular-tour:hover .overlay-work {
	opacity: 0.6;
}
.event-schedule {
	transition: all 0.5s ease;
}
.event-schedule .date .day {
	font-size: 18px;
	width: 50px;
	height: 50px;
	border-radius: 50px;
	background: rgba(47, 85, 212, 0.1);
	line-height: 48px;
	border: 2px solid #fff;
	box-shadow: 0px 0px 2px 0.25px rgba(47, 85, 212, 0.5);
}
.event-schedule .date .month {
	font-size: 13px;
}
.event-schedule .content .title {
	font-size: 20px;
	transition: all 0.5s ease;
}
.event-schedule .content .title:hover {
	color: #2f55d4 !important;
}
.event-schedule .content .location-time {
	font-size: 14px;
}
.event-schedule:hover {
	transform: translateY(-5px);
	box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);
	border-color: #2f55d4 !important;
	background: #f8f9fc !important;
}
.courses-desc {
	transition: all 0.5s ease;
}
.courses-desc .content .title {
	transition: all 0.5s ease;
}
.courses-desc .content .title:hover {
	color: #2f55d4 !important;
}
.courses-desc .collection,
.courses-desc .preview {
	position: absolute;
	opacity: 0;
	z-index: 1;
}
.courses-desc .collection {
	top: 15px;
	left: 15px;
}
.courses-desc .collection i {
	-webkit-text-stroke: 2px #e43f52;
	-webkit-text-fill-color: transparent;
}
.courses-desc .collection i:active {
	-webkit-text-stroke: 0px #e43f52;
	-webkit-text-fill-color: #e43f52;
}
.courses-desc .preview {
	bottom: 15px;
	right: 15px;
}
.courses-desc:hover {
	box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);
	transform: translateY(-10px);
}
.courses-desc:hover .collection,
.courses-desc:hover .preview {
	opacity: 1;
}
.personal-port {
	opacity: 0;
	transition: all 0.5s ease;
}
.container-filter li {
	font-size: 13px;
	padding: 0px 15px;
	margin: 5px 3px;
	font-weight: 700;
	letter-spacing: 0.8px;
	cursor: pointer;
	line-height: 34px;
	transition: all 0.5s ease;
}
.container-filter li.active,
.container-filter li:hover {
	color: #2f55d4 !important;
	border-color: #2f55d4 !important;
}
.spacing {
	padding: 7px;
}
.shop-features .category-title {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 20px;
	z-index: 1;
}
.shop-list .shop-image .overlay-work,
.shop-list .shop-image .shop-icons {
	position: absolute;
	opacity: 0;
	transition: all 0.5s ease;
}
.shop-list .shop-image .overlay-work {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1;
}
.shop-list .shop-image .overlay-work .out-stock {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
}
.shop-list .shop-image .shop-icons {
	top: 15px;
	right: 15px;
	z-index: 2;
}
.shop-list .shop-image:hover .overlay-work,
.shop-list .shop-image:hover .shop-icons {
	opacity: 1;
}
.shop-list .content .product-name {
	transition: all 0.5s ease;
}
.shop-list .content .product-name:hover {
	color: #2f55d4 !important;
}
.shop-list .label {
	position: absolute;
	top: 15px;
	left: 15px;
	z-index: 2;
}
.shop-list .qty-btn {
	pointer-events: none;
	width: 65px;
	padding-left: 15px;
}
.popular-tour .content {
	position: absolute;
	bottom: 3%;
	left: 5%;
}
.main-icon {
	border: 2px solid #e9ecef;
	height: 40px;
	width: 40px;
	line-height: 0;
	text-align: center;
}
.main-icon .fea {
	height: 20px;
}
@media (min-width: 768px) {
	.main-icon {
		margin: 0 auto;
	}
}
.timeline-page:after {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	height: 95%;
	margin: auto;
	width: 2px;
	background-color: #e9ecef !important;
}
.timeline-page .timeline-item .date-label-left,
.timeline-page .timeline-item .duration-right {
	margin-right: 15px;
}
.timeline-page .timeline-item .date-label-left:after,
.timeline-page .timeline-item .duration-right:after {
	content: "";
	position: absolute;
	top: 12px;
	width: 12px;
	height: 12px;
	z-index: 1;
	background-color: #2f55d4;
	border-radius: 4px;
	transform: rotate(45deg);
}
.timeline-page .timeline-item .date-label-left {
	float: right;
	margin-right: 15px;
}
.timeline-page .timeline-item .date-label-left:after {
	right: -34px;
}
.timeline-page .timeline-item .duration-right {
	float: left;
	margin-left: 15px;
}
.timeline-page .timeline-item .duration-right:after {
	left: -34px;
}
.timeline-page .timeline-item .event {
	transition: all 0.2s ease;
}
.timeline-page .timeline-item .event.event-description-right {
	margin-left: 15px;
}
.timeline-page .timeline-item .event.event-description-left {
	margin-right: 15px;
	text-align: right;
}
@media (max-width: 767px) {
	.timeline-page {
		margin-left: 18px;
	}
	.timeline-page:after {
		margin: 0;
	}
	.timeline-page .timeline-item .duration {
		float: left !important;
		margin: 0 0 30px 15px !important;
		text-align: left !important;
	}
	.timeline-page .timeline-item .duration:after {
		left: -21px !important;
	}
	.timeline-page .timeline-item .duration .event {
		text-align: left !important;
		margin-left: 15px;
	}
	.timeline-page .timeline-item .event-description-left {
		text-align: left !important;
		margin: 0 0 0 15px;
	}
}
.tobii__btn svg {
	height: 30px;
	width: auto;
}
.tobii__counter {
	font-size: 16px;
}
.tobii-zoom {
	display: block !important;
}
.tobii-zoom__icon {
	display: none;
}
#grid {
	padding: 0 !important;
}
.team img {
	transition: all 0.5s ease;
}
.team .name:hover {
	color: #2f55d4 !important;
}
.team .team-icon {
	position: absolute;
	bottom: 50%;
	transform: translateY(50%);
	right: 0;
	opacity: 0;
	left: 0;
	text-align: center;
	transition: all 0.5s ease;
}
.team:hover img {
	box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);
	opacity: 0.2;
}
.team:hover .overlay-team {
	opacity: 0.6;
}
.team:hover .team-icon {
	opacity: 1;
}
.login-page {
	font-size: 15px;
}
.login-page .forgot-pass {
	z-index: 99;
	position: relative;
	font-size: 13px;
}
.cover-user .container-fluid {
	max-width: 100%;
}
@media (max-width: 768px) {
	.cover-user .container-fluid .padding-less {
		position: relative !important;
		height: 400px !important;
	}
}
.cover-user .container-fluid .padding-less.img {
	background: scroll center no-repeat;
	background-size: cover;
	position: absolute;
	height: 100%;
}
.cover-user .cover-user-img {
	height: 100vh;
}
@media (min-width: 1025px) {
	.cover-user .cover-user-img {
		padding: 0px 20%;
	}
}
@media (max-width: 768px) {
	.cover-user .cover-user-img {
		align-items: start !important;
		height: auto !important;
		padding: 30px;
	}
}
@media (max-width: 768px) {
	.cover-user .cover-user-content {
		text-align: left !important;
	}
	.cover-user .cover-my-30 {
		margin: 30px 0;
	}
}
.form-signin {
	width: 100%;
	max-width: 400px;
	margin: auto;
}
.bg-profile {
	padding: 100px 0;
	background-size: cover;
	align-self: center;
	position: relative;
	background-position: center center;
}
.bg-profile .public-profile {
	top: 175px;
}
.chat .chat-list:hover,
.chat .chat-list.active,
.chat .chat-list:focus {
	background: #f8f9fc !important;
	box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);
}
.chat .chat-list .on-off,
.chat .chat-type .on-off {
	position: absolute;
	left: -1px;
	top: -1px;
	font-size: 12px !important;
}
.chat.chat-person .on-off {
	font-size: 10px;
}
.chat.chat-person .chat-msg {
	margin-left: 8px;
}
.chat.chat-person .chat-msg .msg {
	border: 1px solid #e9ecef;
}
.chat.chat-person .chat-msg .msg-time {
	font-size: 12px !important;
}
.chat.chat-person .chat-right {
	justify-content: flex-end;
	text-align: right;
}
.chat.chat-person .chat-right .chat-user-image {
	order: 2;
}
.chat.chat-person .chat-right .chat-user-image .on-off {
	right: -1px;
}
.chat.chat-person .chat-right .chat-msg {
	margin-right: 8px;
	margin-left: 0;
}
.chat.chat-person .chat-right .chat-msg .msg {
	display: inline-block;
}
.chat.chat-person .chat-right .chat-msg .msg-time {
	display: block;
}
.simplebar-track.simplebar-vertical {
	width: 8px !important;
}
.simplebar-track.simplebar-vertical .simplebar-scrollbar:before {
	width: 4px !important;
	background: #adb5bd !important;
}
.coming-soon,
.maintenance,
.error-page {
	font-size: 40px;
	letter-spacing: 1px;
}
@media (max-width: 767px) {
	.coming-soon,
	.maintenance,
	.error-page {
		font-size: 32px;
	}
}
#countdown .count-down,
#eventdown .count-down,
#token-sale .count-down {
	display: inline-block;
	margin: 30px 10px 10px;
	color: #fff;
	text-align: center;
}
#countdown .count-down .count-number,
#eventdown .count-down .count-number,
#token-sale .count-down .count-number {
	font-size: 40px;
	line-height: 95px;
}
#countdown .count-down .count-head,
#eventdown .count-down .count-head,
#token-sale .count-down .count-head {
	display: block;
	position: relative;
	transform: translateY(-20px);
	text-transform: uppercase;
	font-size: 14px;
	letter-spacing: 1px;
}
#countdown .count-down .count-number {
	font-size: 40px;
	line-height: 95px;
	border: 4px solid #dee2e6;
	height: 130px;
	width: 130px;
	border-radius: 50%;
}
#token-sale .count-down {
	border: 0;
	color: #3c4858 !important;
}
#token-sale .count-down .count-number {
	line-height: 80px;
}
@media (max-width: 767px) {
	#token-sale .count-down .count-number {
		font-size: 30px;
	}
}
#token-sale .count-down .count-head {
	margin-bottom: 0 !important;
	transform: translateY(-15px);
}
@media (max-width: 767px) {
	#token-sale .count-down .count-head {
		font-size: 10px;
	}
}
#eventdown .count-down {
	margin: 10px !important;
	border: 0;
}
@media (max-width: 767px) {
	#eventdown .count-down {
		width: 60px;
	}
}
#eventdown .count-down .count-number {
	line-height: 80px;
}
@media (max-width: 767px) {
	#eventdown .count-down .count-number {
		font-size: 30px;
	}
}
#eventdown .count-down .count-head {
	transform: translateY(-15px);
}
@media (max-width: 767px) {
	#eventdown .count-down .count-head {
		font-size: 10px;
	}
}
#maintenance {
	color: #fff;
	font-size: 56px;
	letter-spacing: 1px;
}
#maintenance .indicator {
	font-size: 18px;
}
.form-icon .icons {
	position: absolute;
	top: 13px;
	left: 18px;
}
.map {
	line-height: 0;
}
.map iframe {
	width: 100%;
	height: 400px;
}
.error {
	margin: 8px 0px;
	display: none;
	color: #e43f52;
}
#ajaxsuccess {
	font-size: 16px;
	width: 100%;
	display: none;
	clear: both;
	margin: 8px 0px;
}
.error_message,
#success_page {
	padding: 10px;
	margin-bottom: 20px;
	text-align: center;
	border-radius: 5px;
}
.error_message {
	background-color: rgba(240, 115, 90, 0.1) !important;
	border: 2px solid rgba(240, 115, 90, 0.1) !important;
	color: #f0735a !important;
	font-size: 14px;
}
.contact-loader {
	display: none;
}
#success_page {
	background-color: rgba(83, 199, 151, 0.1) !important;
	border: 2px solid rgba(83, 199, 151, 0.1) !important;
	color: #53c797 !important;
}
#success_page p {
	margin-bottom: 0 !important;
}
.qs-datepicker-container {
	background-color: #fff;
	border-color: #dee2e6;
}
.qs-datepicker-container .qs-controls {
	background-color: #e9ecef;
}
.qs-datepicker-container .qs-controls .qs-month-year {
	font-weight: 600;
	font-size: 15px;
}
.qs-datepicker-container .qs-controls .qs-month-year:hover {
	border-bottom: 1px solid #e9ecef;
}
.qs-datepicker-container .qs-squares .qs-square {
	font-size: 15px;
	height: 34px;
	width: 34px;
}
.qs-datepicker-container
	.qs-squares
	.qs-square:not(.qs-empty):not(.qs-disabled):not(.qs-day):not(.qs-active):hover,
.qs-datepicker-container .qs-squares .qs-square.qs-current {
	background: #2f55d4;
	color: #fff;
	border-radius: 30px;
	font-weight: 500;
	text-decoration: none;
	border-radius: 30px;
}
.qs-datepicker-container .qs-squares .qs-day {
	font-weight: 500;
	color: #8492a6;
}
@media (min-width: 768px) {
	.map.map-height-two iframe {
		height: 551px;
	}
}
.footer {
	background: #202942;
	position: relative;
	color: #adb5bd;
}
.footer .footer-py-60 {
	padding: 60px 0;
}
.footer .footer-py-30 {
	padding: 30px 0;
}
.footer .logo-footer {
	font-size: 22px;
}
.footer .logo-footer:focus {
	outline: none;
}
.footer .footer-head {
	letter-spacing: 1px;
	font-weight: 500;
	color: #f8f9fc;
}
.footer .foot-subscribe .form-control {
	background-color: #27314f;
	border: 1px solid #27314f;
	color: #f8f9fc;
}
.footer .foot-subscribe .form-control:focus {
	box-shadow: none;
}
.footer .foot-subscribe.foot-white .form-control {
	color: #adb5bd;
}
.footer .foot-subscribe input::placeholder {
	color: #adb5bd;
}
.footer .text-foot {
	color: #adb5bd;
}
.footer .footer-list {
	margin-bottom: 0;
}
.footer .footer-list li {
	margin-bottom: 10px;
}
.footer .footer-list li a {
	transition: all 0.5s ease;
}
.footer .footer-list li a:hover {
	color: #e6e8ea;
}
.footer .footer-list li:last-child {
	margin-bottom: 0;
}
.footer .footer-border,
.footer .footer-bar {
	border-top: 1px solid #283353;
}
.footer .border {
	border-color: #283353 !important;
}
.footer.footer-light {
	background: #f8f9fc;
	color: #8492a6;
}
.footer.footer-light .footer-head {
	color: #3c4858;
}
.footer.footer-light .foot-subscribe .form-control {
	background-color: #f8f9fc;
	border: 1px solid #e9ecef;
	color: #f8f9fc;
}
.footer.footer-light .foot-subscribe.foot-white .form-control {
	color: #adb5bd;
}
.footer.footer-light .foot-subscribe input::placeholder {
	color: #adb5bd;
}
.footer.footer-light .border {
	border-color: #e9ecef !important;
}
.footer.footer-light .text-foot {
	color: #8492a6;
}
.footer.footer-light .footer-list li a:hover {
	color: #495057;
}
#style-switcher {
	transition: all 0.4s;
	background: none repeat scroll 0 0 #fff;
	box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);
	left: -189px;
	position: fixed;
	top: 17%;
	width: 189px;
	z-index: 9999;
	padding: 10px 5px;
}
#style-switcher div {
	padding: 5px 10px;
}
#style-switcher div h3 {
	color: #3c4858;
	font-size: 16px;
	margin: 0 3px 12px;
}
#style-switcher .bottom a.settings {
	background: none repeat scroll 0 0 #fff;
	height: 41px;
	position: absolute;
	right: -41px;
	top: 0px;
	width: 40px;
	padding: 3px;
	border-radius: 0 30px 30px 0;
}
ul.pattern {
	list-style: none outside none;
	overflow: hidden;
	padding: 0;
	border-radius: 0px;
}
ul.pattern li.list-inline-item:not(:last-child) {
	margin-right: 2px;
	margin-bottom: 0;
}
ul.pattern li a {
	cursor: pointer;
	display: block;
	height: 35px;
	width: 35px;
	border-radius: 50%;
	margin: 3px;
}
ul.pattern .color1 {
	background-color: #2f55d4;
}
ul.pattern .color2 {
	background-color: #6dc77a;
}
ul.pattern .color3 {
	background-color: #7952b3;
}
ul.pattern .color4 {
	background-color: #ff5b69;
}
ul.pattern .color5 {
	background-color: #32c2ec;
}
ul.pattern .color6 {
	background-color: #0f7173;
}
ul.pattern .color7 {
	background-color: #00c9a7;
}
ul.pattern .color8 {
	background-color: #766df4;
}
ul.pattern .color9 {
	background-color: #f7961c;
}
ul .t-dark,
ul .t-rtl-light {
	display: inline-block;
}
ul .t-ltr-light,
ul .t-light,
ul .t-rtl-dark,
ul .t-ltr-dark {
	display: none;
}
@media only screen and (max-width: 375px) {
	#style-switcher {
		display: none;
	}
}


/* ================================================================================== */
/* ================================================================================== */

::-webkit-scrollbar {
	width: 6px;
}
::-webkit-scrollbar-track {
	background: #fff;
}
::-webkit-scrollbar-thumb {
	background: #2f55d4;
}
::-webkit-scrollbar-thumb:hover {
	background: #2f55d4;
}




select {
	/* appearance: none; */
	outline: 0;
	border: 1px solid #dee2e6;
	border-radius: 6px;
	flex: 1;
	padding: 0 1em;
	background-color: #fff;
	cursor: pointer;
}

.s-select {
	position: relative;
	display: flex;
	width: 20em;
	height: 3em;
	/* border-radius: .25em; */
	overflow: hidden;
}

/* Arrow */
.select::after {
	position: absolute;
	top: 0;
	right: 0;
	padding: 1em;
	transition: .25s all ease;
}



.banner-bg-image{
	/* background: url("../images/bg.png") #2f55d4 center; */
	/* background-size: cover; */
}

.contact-card{
	background-color: #f8f9fc;
}

.contact-card .icons i{
	font-size: larger;
}


.card.features .icons i{
	font-size: 20px;
}
`;