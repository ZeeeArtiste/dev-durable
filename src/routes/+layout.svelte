<script>
  import questions from '$lib/json/questions.json';
</script>

<div class="questions-layout">
  <aside class="sidebar" role="complementary">
    <nav class="main-menu" role="navigation" aria-label="Questions Navigation">
      <ul>
        {#each questions as { id, label }}
          <li>
            <a aria-label="{label}" class="p-5" href={`/question/${id}`}>
                <svg class="fa" xmlns="http://www.w3.org/2000/svg" fill="#fff" height="1em" viewBox="0 0 320 512"><path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
                <span class="nav-text">
                  {label}
                </span>
            </a>
          </li>
        {/each}
      </ul>       
    </nav>
  </aside>
  <main class="question-content" role="main">
    <slot />
  </main>
</div>

<style>
  *{
    font-family: Arial, Helvetica, sans-serif;
  }
  a:focus {
    outline: 2px solid rgb(26, 26, 248); /* Style de focus visible */
  }
  .questions-layout {
    display: flex;
    height: 100%
  }
  .question-content {
   width: 66%;
  }

.fa {
  position: relative;
  display: table-cell;
  width: 50px;
  height: 36px;
  text-align: center;
  vertical-align: middle;
  font-size:20px;
}

.main-menu {
background:#222222;
border-right:1px solid #fff;
position:absolute;
top:0;
bottom:0;
height:100%;
left:0;
width:250px;
overflow:hidden;
-webkit-transition:width .05s linear;
transition:width .05s linear;
-webkit-transform:translateZ(0) scale(1,1);
z-index:1000;
}

.main-menu>ul {
margin:7px 0;
}

.main-menu li {
position:relative;
display:block;
width:250px;
}

.main-menu li>a {
  position:relative;
  display:table;
  border-collapse:collapse;
  border-spacing:0;
  color:#fff;
  font-family: arial;
  font-size: 14px;
  text-decoration:none;
  -webkit-transform:translateZ(0) scale(1,1);
  -webkit-transition:all .1s linear;
  transition:all .1s linear;
  padding: 15px;
  margin: 15px 0;
}

.main-menu .nav-text {
position:relative;
display:table-cell;
vertical-align:middle;
width:190px;
font-family: 'Titillium Web', sans-serif;
}

a:hover,a:focus {
text-decoration:none;
}

nav {
-webkit-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
-o-user-select:none;
user-select:none;
}

nav ul,nav li {
outline:0;
margin:0;
padding:0;
}
.main-menu li:hover>a,.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,.dashboard-page nav.dashboard-menu ul li.active a {
color:#fff;
background-color:#1899D6;
}

.sidebar {
    width: 33%;
    position: relative;
  }

  @media screen and (max-width: 768px) {

  .question-content {
   width: 100%;
  }

   .questions-layout {
    flex-direction: column;
  }

   .main-menu {
    position: static;
    height: auto;
    width:100%;
    }

    .sidebar{
      width: 100%;
    }
  }
</style>
