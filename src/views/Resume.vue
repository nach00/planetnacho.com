<template>
  <v-content>
    <v-container class="mdDark mdLight--text" fluid fill-height>
      <v-container>
        <v-container id="header">
          <v-row class="px-8">
            <v-col class>
              <v-row class="name-header">Natcha Pradappet</v-row>
              <v-row class="contact-info">
                Dallas, Texas. 75219.
                <br />469-404-7186.
              </v-row>
            </v-col>
            <v-spacer></v-spacer>
            <v-btn class="flatSunflower" style="color" small>
              <span class="small-caps">Download/Print</span>
              <v-icon>mdi-pdf-box</v-icon>
              <!-- <v-img src="/img/icons/icons8-pdf.png" height="16" contain></v-img> -->
            </v-btn>
          </v-row>
        </v-container>
        <v-container id="middle">
          <v-row id="history" class="primary px-8 py-4" no-gutters style="border-radius: 20px">
            <v-container id="title">
              <span class="reg-text title-caps">Education and Employment History</span>
            </v-container>
            <v-container>
              <v-row>
                <v-col class="small-caps mdRed--text">
                  <v-icon color="mdRed" small>mdi-circle</v-icon>Online/Remote
                </v-col>
                <v-col class="small-caps mdYellow--text">
                  <v-icon color="mdYellow" small>mdi-circle</v-icon>Dallas-Fort Worth, Texas
                </v-col>
                <v-col class="small-caps mdBlue--text">
                  <v-icon color="mdBlue" small>mdi-circle</v-icon>Orlando, Florida
                </v-col>
                <v-col class="small-caps mdCyan--text">
                  <v-icon color="mdCyan" small>mdi-circle</v-icon>Bangkok, Thailand
                </v-col>
                <v-col class="small-caps mdGreen--text">
                  <v-icon color="mdGreen" small>mdi-circle</v-icon>Waco, Texas
                </v-col>
              </v-row>
            </v-container>
            <!-- EDUCATION CONTENT -->
            <v-container id="education" class>
              <v-row class no-gutters>
                <v-col class cols="3">
                  <v-container class="ma-0 pa-0 mb-n2">
                    <span class="mdRed--text small-caps">Lambda School</span>
                  </v-container>
                  <br />
                  <span class="mdRed--text details">iOS Development</span>
                  <br />
                </v-col>
                <v-col class cols="1">
                  <v-container class="ma-0 pa-0 mb-n2">
                    <span class="mdRed--text small-caps">Launch School</span>
                  </v-container>
                  <br />
                  <span class="mdRed--text details">Full-Stack Development</span>
                  <br />
                </v-col>
                <v-col class cols="4">
                  <v-container class="ma-0 pa-0 mb-n2">
                    <span class="mdYellow--text small-caps">Le Cordon Bleu</span>
                  </v-container>
                  <br />
                  <span class="mdYellow--text details">Certificate in Culinary Arts</span>
                  <br />
                </v-col>
                <v-col class cols="5">
                  <v-container class="ma-0 pa-0 mb-n2">
                    <span class="mdYellow--text small-caps">University of Texas at Dallas</span>
                  </v-container>
                  <br />
                  <span class="mdYellow--text details">Master's in Business Administration</span>
                  <br />
                </v-col>
                <v-col class cols="3">
                  <v-container class="ma-0 pa-0 mb-n2">
                    <span class="mdGreen--text small-caps">Baylor University</span>
                  </v-container>
                  <br />
                  <span class="mdGreen--text details">Bachelor's in Business Marketing</span>
                  <br />
                </v-col>
              </v-row>
            </v-container>
            <!-- EDUCATION TIMELINE -->
            <v-container id="education-timeline" class>
              <v-row class="primary" no-gutters>
                <v-col class="mdRed" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdRed" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="primary" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdRed" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdYellow" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdYellow" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="primary" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="primary" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdYellow" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdYellow" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdYellow" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="primary" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="primary" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdGreen" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdGreen" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdGreen" style="border-radius: 10px; height:10px;" cols="1" />
              </v-row>
            </v-container>
            <!-- YEAR -->
            <v-container id="year">
              <v-row no-gutters>
                <v-col class="year" cols="1">2020</v-col>
                <v-col class="year" cols="1">2019</v-col>
                <v-col class="year" cols="1">2018</v-col>
                <v-col class="year" cols="1">2017</v-col>
                <v-col class="year" cols="1">2016</v-col>
                <v-col class="year" cols="1">2015</v-col>
                <v-col class="year" cols="1">2014</v-col>
                <v-col class="year" cols="1">2013</v-col>
                <v-col class="year" cols="1">2012</v-col>
                <v-col class="year" cols="1">2011</v-col>
                <v-col class="year" cols="1">2010</v-col>
                <v-col class="year" cols="1">2009</v-col>
                <v-col class="year" cols="1">2008</v-col>
                <v-col class="year" cols="1">2007</v-col>
                <v-col class="year" cols="1">2006</v-col>
                <v-col class="year" cols="1">2005</v-col>
              </v-row>
            </v-container>
            <!-- EMPLOYMENT TIMELINE -->
            <v-container id="employment-timeline" class>
              <v-row class="primary" no-gutters>
                <v-col class="mdRed" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdRed" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdYellow" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdYellow" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdBlue" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdYellow" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdYellow" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdYellow" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="primary" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdYellow" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="primary" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdYellow" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdYellow" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="primary" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="mdCyan" style="border-radius: 10px; height:10px;" cols="1" />
                <v-col class="primary" style="border-radius: 10px; height:10px;" cols="1" />
              </v-row>
            </v-container>
            <!-- EMPLOYMENT CONTENT -->
            <v-container id="employment-content" class>
              <v-row class no-gutters>
                <v-col class="primary" cols="2">
                  <v-container class="ma-0 pa-0 mb-n2">
                    <span class="mdRed--text small-caps">
                      RFID Interlock
                      <br />
                    </span>
                    <br />
                  </v-container>
                  <span class="mdRed--text details">
                    UI/UX Designer
                    <br />
                  </span>
                </v-col>
                <v-col class="primary" cols="2">
                  <v-container class="ma-0 pa-0 mb-n2">
                    <span class="mdYellow--text small-caps">
                      Fresh Market
                      <br />
                    </span>
                    <br />
                  </v-container>
                  <span class="mdYellow--text details">
                    Executive Chef
                    <br />
                  </span>
                </v-col>
                <v-col class="primary" cols="1">
                  <v-container class="ma-0 pa-0 mb-n2">
                    <span class="mdBlue--text small-caps">
                      EPCOT Theme Park
                      <br />
                    </span>
                    <br />
                  </v-container>
                  <span class="mdBlue--text details">
                    Pastry Chef
                    <br />
                  </span>
                </v-col>
                <v-col class="primary" cols="4">
                  <v-container class="ma-0 pa-0 mb-n2">
                    <span class="mdYellow--text small-caps">
                      Fresh Market
                      <br />
                    </span>
                    <br />
                  </v-container>
                  <span class="mdYellow--text details">
                    Marketing and Operations Mananger
                    <br />
                  </span>
                </v-col>
                <v-col class="primary" cols="2">
                  <v-container class="ma-0 pa-0 mb-n2">
                    <span class="mdYellow--text small-caps">
                      Army and Air Force Exchange Services
                      <br />
                    </span>
                    <br />
                  </v-container>
                  <span class="mdYellow--text details">
                    Social Media Intern
                    <br />
                  </span>
                </v-col>
                <v-col class="primary" cols="3">
                  <v-container class="ma-0 pa-0 mb-n2">
                    <span class="mdYellow--text small-caps">
                      UT Southwestern Medical Center
                      <br />
                    </span>
                    <br />
                  </v-container>
                  <span class="mdYellow--text details">
                    Human Tissue Distributions and Aciqusitions
                    <br />
                  </span>
                </v-col>
                <v-col class="primary" cols="2">
                  <v-container class="ma-0 pa-0 mb-n2">
                    <span class="mdCyan--text small-caps">
                      Foote, Cone, and Belding
                      <br />
                    </span>
                    <br />
                  </v-container>
                  <span class="mdCyan--text details">
                    Marketing Intern
                    <br />
                  </span>
                </v-col>
              </v-row>
            </v-container>
          </v-row>
        </v-container>
        <v-container class="mt-n8" id="bottom" fill-height fluid>
          <v-container class="ma-0">
            <v-row class>
              <v-col id cols="10" class="px-0">
                <v-row class="primary px-8 py-4 mr-2 mb-2" no-gutters style="border-radius: 20px">
                  <v-container id="title">
                    <v-container class="pl-0">
                      <span class="reg-text title-caps">Awards and Accolades</span>
                    </v-container>
                    <v-row style="justify-content: space-around">
                      <v-col cols="1" class="ml-12 pa-1" style="margin: auto 0">
                        <v-img class src="/img/best.svg"></v-img>
                      </v-col>
                      <v-col cols="3" class="flatSunflower--text">
                        <span class="small-caps">Hack DFW</span>
                        <br />
                        <br />
                        <br />
                        <span class="details">
                          First Place
                          <br />February 2019
                          <!-- <a href="https://youtu.be/UyWXdsw_MUw" class="flatAmethyst--text">
                            Beef Over Chicken
                          </a>-->
                        </span>
                      </v-col>
                      <v-col cols="1" class="ml-12 pa-1" style="margin: auto 0">
                        <v-img class src="/img/better.svg"></v-img>
                      </v-col>
                      <v-col cols="3" class="flatSunflower--text">
                        <span class="small-caps">Startup Weekend Fort Worth</span>
                        <br />
                        <br />
                        <span class="details">
                          Second Place
                          <br />March 2019
                        </span>
                      </v-col>
                      <v-col cols="1" class="ml-12 pa-1" style="margin: auto 0">
                        <v-img class src="/img/good.svg"></v-img>
                      </v-col>
                      <v-col cols="3" class="flatSunflower--text">
                        <span class="small-caps">
                          Brother
                          <br />Hackathon
                        </span>
                        <br />
                        <br />
                        <span class="details">
                          Best Retail Solution
                          <br />April 2019
                        </span>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-row>
                <v-row
                  class="primary px-8 py-4 mr-2 mt-4"
                  no-gutters
                  style="border-radius: 20px"
                  align="stretch"
                >
                  <v-container id="title">
                    <span class="reg-text title-caps">Extracurricular</span>
                  </v-container>
                  <v-row style="justify-content: space-around">
                    <v-col cols="1" class="ml-12 pa-1" style="margin: auto 0">
                      <v-img class src="/img/dms.svg"></v-img>
                    </v-col>
                    <v-col cols="3" class="flatSunflower--text">
                      <span class="small-caps">Dallas MakerSpace</span>
                      <br />
                      <br />
                      <span class="details">Graphic Design Instructor</span>
                    </v-col>
                    <v-col cols="1" class="ml-12 pa-1" style="margin: auto 0">
                      <v-img class src="/img/hackutd.svg" height="70" contain></v-img>
                    </v-col>
                    <v-col cols="3" class="flatSunflower--text">
                      <span class="small-caps">Hack UTD</span>
                      <br />
                      <br />
                      <span class="details">
                        Hardware Development Mentor
                        <br />
                      </span>
                    </v-col>
                    <v-col cols="1" class="ml-12 pa-1" style="margin: auto 0">
                      <v-img class src="/img/dpa.svg"></v-img>
                    </v-col>
                    <v-col cols="3" class="flatSunflower--text">
                      <span class="small-caps">Dallas Pets Alive!</span>
                      <br />
                      <br />
                      <span class="details">Event Volunteer</span>
                    </v-col>
                  </v-row>
                </v-row>
              </v-col>
              <v-col class="px-0" cols="6">
                <v-row
                  class="primary px-8 py-4 ml-2"
                  no-gutters
                  style="border-radius: 20px; height: 100%"
                  align="stretch"
                >
                  <v-container id class="ma-0 pa-0">
                    <v-container class="pl-0">
                      <span class="reg-text title-caps">SKILLS</span>
                    </v-container>
                    <v-container class="ma-0 pa-0">
                      <v-row>
                        <v-col class="pa-0 ma-0 pl-3 pt-4">
                          <span class="small-caps">Design</span>
                          <br />
                          <br />
                          <br />
                          <span class="details">
                            Branding & Logo
                            <br />Advertising
                            <br />Illustrator
                            <br />Photoshop
                            <br />Adobe XD
                            <br />Fusion 360
                            <br />
                          </span>
                        </v-col>
                        <v-col class="pa-0 ma-0 pl-3 pt-4">
                          <span class="small-caps">Programming & Development</span>
                          <br />
                          <br />
                          <br />
                          <span class="details">
                            HTML & CSS
                            <br />Javascript
                            <br />Vue.js
                            <br />Python
                            <br />Ruby
                            <br />
                          </span>
                        </v-col>
                        <v-col class="pa-0 ma-0 pl-3 pt-4">
                          <span class="small-caps">Computer Numeric Control (CNC)</span>
                          <br />
                          <br />
                          <br />
                          <span class="details">
                            Routing (Wood)
                            <br />Milling (Metal)
                            <br />Laser Etching
                            <br />Vinyl Cutting
                            <br />3D Printing
                            <br />
                            <br />
                            <br />
                          </span>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="pa-0 ma-0 pl-3 pt-4">
                          <span class="small-caps">Hands-On</span>
                          <br />
                          <br />
                          <br />
                          <span class="details">
                            Woodworking
                            <br />Metalworking
                            <br />Welding
                            <br />Automotive
                            <br />
                          </span>
                        </v-col>
                        <v-col class="pa-0 ma-0 pl-3 pt-4">
                          <span class="small-caps">Electronics</span>
                          <br />
                          <br />
                          <br />
                          <span class="details">
                            Raspberry Pi
                            <br />Arduino
                            <br />Soldering
                            <br />PC Case Modding
                            <br />
                          </span>
                        </v-col>
                        <v-col class="pa-0 ma-0 pl-3 pt-4">
                          <span class="small-caps"></span>
                          <br />
                          <br />
                          <span class="details">
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                          </span>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-container>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-container>
      </v-container>
    </v-container>
  </v-content>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@import url("https://use.typekit.net/ggq3gsy.css")

span, div
  font-family: basic-sans, sans-serif
  line-height: 12px 

a
  color: --var(-v-uv)

.small-caps
  font-family: basic-sans, sans-serif
  font-weight: 700
  font-size: 12px
  letter-spacing: 0.2em
  text-transform: uppercase

.title-caps
  font-family: basic-sans, sans-serif
  font-weight: 700
  font-size: 20px
  letter-spacing: 0.2em
  text-transform: uppercase
  line-height: 1

.details
  font-family: basic-sans, sans-serif
  font-size: 14px
  line-height: 14px
  font-style: 400
  font-weight: normal

.name-header
  font-family: basic-sans, sans-serif !important
  font-weight: 700
  font-size: 24px
  text-transform: uppercase
  letter-spacing: 0.2em
  line-height: 1


.contact-info
  font-family: basic-sans, sans-serif !important
  font-style: normal
  font-size: 20px
  color: var(--v-mdLight-base)
  line-height: 1.25
.year
  font-family: basic-sans, sans-serif !important
  font-size: 18px
  color: var(--v-mdLight-base)

</style>
