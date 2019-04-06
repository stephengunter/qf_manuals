<template>
   <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
         <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
         </div>
         <div class="sidebar-brand-text mx-3">Manuals</div>
      </a>

      <hr class="sidebar-divider my-0">
      <li class="nav-item active">
         <a class="nav-link" href="index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
         </a>
      </li>
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
            Interface
      </div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
         <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <i class="fas fa-fw fa-cog"></i>
            <span>Components</span>
         </a>
         <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
               <h6 class="collapse-header">Custom Components:</h6>
               <a class="collapse-item" href="buttons.html">Buttons</a>
               <a class="collapse-item" href="cards.html">Cards</a>
            </div>
         </div>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
            Addons
      </div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
         <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
            <i class="fas fa-fw fa-folder"></i>
            <span>Deploy</span>
         </a>
         <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
               <h6 class="collapse-header">On-Premise:</h6>
               <a class="collapse-item" href="#" @click.prevent="link('/deploy/local/prepare')">Prepare</a>
               <a class="collapse-item" href="#" @click.prevent="link('/deploy/local/process')">Process</a>
               <a class="collapse-item" href="#" @click.prevent="link('/deploy/local/settings')">Settings</a>
               <a class="collapse-item" href="#" @click.prevent="link('/deploy/domains')">Domains</a>
               <a class="collapse-item" href="#" @click.prevent="link('/deploy/ssl')">SSL</a>
               <a class="collapse-item" href="#" @click.prevent="link('/deploy/local/downloads')">Downloads</a>
               <div class="collapse-divider"></div>
               
               <h6 class="collapse-header">Cloud</h6>
               <a class="collapse-item" href="#" @click.prevent="link('/deploy/cloud/prepare')">Prepare</a>
               <a class="collapse-item" href="#" @click.prevent="link('/deploy/cloud/process')">Process</a>
               <a class="collapse-item" href="#" @click.prevent="link('/deploy/cloud/settings')">Settings</a>
            </div>
         </div>
      </li>

      <li class="nav-item">
         <a class="nav-link" href="#" @click.prevent="link('/mongodb')">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>MongoDB</span>
         </a>
      </li>

     
      <!-- <li class="nav-item">
            <a class="nav-link" href="charts.html">
               <i class="fas fa-fw fa-chart-area"></i>
               <span>Charts</span></a>
      </li> -->

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block">

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
         <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

   </ul>
</template>

<script>
export default {
   name: 'SideBar',
   methods: {
      link(path){
         this.$router.push({ path: path });
      }
   }
}
</script>

