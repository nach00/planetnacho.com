<template>
  <v-content>
    <v-container class="mdDark mdLight--text" fluid fill-height>
      <v-container>
        <v-row id="header" class="red" no-gutters="">
          <v-col class>
            <v-row class="name-header" no-gutters="">Natcha Pradappet</v-row>
            <v-row class="contact-info" no-gutters=""> Dallas, Texas. 75219.<br />469-404-7186. </v-row>
          </v-col>
          <v-col>
            <v-btn class>Download PDF</v-btn>
          </v-col>
        </v-row>
        <v-row id="history" class="primary pa-0" no-gutters="">
          <v-container id="title">
            <span class="reg-text small-caps">Education and Employment History</span>
          </v-container>
          <v-container id="education" class="ma-0 pa-0">
            <v-row no-gutters>
              <v-col class="two-block"><span class="mdRed--text small-caps"> Lambda School<br /></span><span class="mdRed--text reg-">iOS Development</span></v-col>
              <v-col class="one-block"></v-col>
              <v-col class="one-block"><span class="resumeRed--text small-caps">Launch School<br /></span><span class="resumeRed--text">Full-Stack Development<br /></span></v-col>
              <v-col class="one-block"><span class="resumeYellow--text small-caps">Le Cordon Bleu<br /> </span><span class="resumeYellow--text ">Certificate in Culinary Arts<br /> </span></v-col>
              <v-col class="one-block"></v-col>
              <v-col class="one-block"></v-col>
              <v-col class="one-block"></v-col>
              <v-col class="one-block"><span class="resumeYellow--text small-caps">University of Texas at Dallas<br /> </span><span class="resumeYellow--text ">Master's in Business Administration<br /> </span></v-col>
              <v-col class="one-block"></v-col>
              <v-col class="one-block"></v-col>
              <v-col class="one-block"></v-col>
              <v-col class="one-block"></v-col>
              <v-col class="one-block"><span class="resumeGreen--text small-caps">Baylor University<br /> </span><span class="resumeGreen--text ">Bachelor's in Business Marketing<br /></span></v-col>
              <v-col class="one-block"></v-col>
              <v-col class="one-block"></v-col>
            </v-row>
          </v-container>
          <v-container id="education-timeline">
            <v-row>
              <v-col class="mdRed pa-0" style="width: 100px; border-radius: 10px; height:10px;" />
              <v-col class="mdRed pa-0" style="width: 100px; border-radius: 10px; height:10px;" />
              <v-col class="pa-0" style="width: 100px; border-radius: 10px; height:10px;" />
              <v-col class="mdRed pa-0" style="width: 100px; border-radius: 10px; height:10px;" />
              <v-col class="mdYellow pa-0" style="width: 100px; border-radius: 10px; height:10px;" />
              <v-col class="mdYellow pa-0" style="width: 100px; border-radius: 10px; height:10px;" />
              <v-col class="pa-0" style="width: 100px; border-radius: 10px; height:10px;" />
              <v-col class="pa-0" style="width: 100px; border-radius: 10px; height:10px;" />
              <v-col class="mdYellow pa-0" style="width: 100px; border-radius: 10px; height:10px;" />
              <v-col class="mdYellow pa-0" style="width: 100px; border-radius: 10px; height:10px;" />
              <v-col class="mdYellow pa-0" style="width: 100px; border-radius: 10px; height:10px;" />
              <v-col class="pa-0" style="width: 100px; border-radius: 10px; height:10px;" />
              <v-col class="pa-0" style="width: 100px; border-radius: 10px; height:10px;" />
              <v-col class="mdGreen pa-0" style="width: 100px; border-radius: 10px; height:10px;" />
              <v-col class="mdGreen pa-0" style="width: 100px; border-radius: 10px; height:10px;" />
              <v-col class="mdGreen pa-0" style="width: 100px; border-radius: 10px; height:10px;" />
            </v-row>
          </v-container>
          <v-container id="year">
            <v-row>
              <v-col class="small-caps">2020</v-col>
              <v-col class="small-caps">2019</v-col>
              <v-col class="small-caps">2018</v-col>
              <v-col class="small-caps">2017</v-col>
              <v-col class="small-caps">2016</v-col>
              <v-col class="small-caps">2015</v-col>
              <v-col class="small-caps">2014</v-col>
              <v-col class="small-caps">2013</v-col>
              <v-col class="small-caps">2012</v-col>
              <v-col class="small-caps">2011</v-col>
              <v-col class="small-caps">2010</v-col>
              <v-col class="small-caps">2009</v-col>
              <v-col class="small-caps">2008</v-col>
              <v-col class="small-caps">2007</v-col>
              <v-col class="small-caps">2006</v-col>
              <v-col class="small-caps">2005</v-col>
            </v-row>
          </v-container>
          <v-container id="employment-timeline">
            <v-row>
              <v-col class="mdRed pa-0" style="border-radius: 10px; height:10px;" />
              <v-col class="mdRed pa-0" style="border-radius: 10px; height:10px;" />
              <v-col clas pa-0s style="border-radius: 10px; height:10px;" />
              <v-col class="mdRed pa-0" style="border-radius: 10px; height:10px;" />
              <v-col class="mdYellow pa-0" style="border-radius: 10px; height:10px;" />
              <v-col class="mdYellow pa-0" style="border-radius: 10px; height:10px;" />
              <v-col clas pa-0s style="border-radius: 10px; height:10px;" />
              <v-col clas pa-0s style="border-radius: 10px; height:10px;" />
              <v-col class="mdYellow pa-0" style="border-radius: 10px; height:10px;" />
              <v-col class="mdYellow pa-0" style="border-radius: 10px; height:10px;" />
              <v-col class="mdYellow pa-0" style="border-radius: 10px; height:10px;" />
              <v-col clas pa-0s style="border-radius: 10px; height:10px;" />
              <v-col clas pa-0s style="border-radius: 10px; height:10px;" />
              <v-col class="mdGreen pa-0" style="border-radius: 10px; height:10px;" />
              <v-col class="mdGreen pa-0" style="border-radius: 10px; height:10px;" />
              <v-col class="mdGreen pa-0" style="border-radius: 10px; height:10px;" />
            </v-row>
          </v-container>

          <!-- <v-row id="legend"></v-row> -->
        </v-row>
        <v-row id="extra" class="blue">Natcha Pradappet</v-row>
      </v-container>
    </v-container>
  </v-content>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
span,
div {
  font-family: basic-sans, sans-serif !important;
  // color: var(--v-mdLight-base) !important;
}

// @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
// .basic-sans {
// font-family: basic-sans, sans-serif !important;
// }
.name-header {
  font-family: basic-sans, sans-serif !important;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.2em;
}

.contact-info {
  font-family: basic-sans, sans-serif !important;
  font-style: normal;
  font-size: 12px;
  color: var(--v-mdLight-base);
}

.small-caps {
  font-family: basic-sans, sans-serif !important;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.reg-text {
  font-family: basic-sans, sans-serif !important;
  font-style: normal;
  font-size: 14px;
  color: var(--v-mdLight-base);
}

.year {
  font-family: basic-sans, sans-serif !important;
  font-style: normal;
  font-size: 18px;
  color: var(--v-mdLight-base);
}

.fade {
  // opacity: 0.5;
  color: var(--v-uv-base);
}

.one-block {
  padding: 0;
  margin: 0;
  max-width: 117px;
  height: 100px;
}
.two-block {
  padding: 0;
  margin: 0;
  max-width: 234px;
  height: 100px;
}
</style>
