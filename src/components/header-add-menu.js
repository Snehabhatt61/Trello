import React, { Component } from 'react';

class Headeraddmenu extends Component {

    render() {
        var visibility = "hide";

        if (this.props.headeraddVisibility) {
            visibility = "show";
        }
        return (
            <div id='header-add-menu'
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>



                <div className='header-add'>
                    <span class="-title">Create</span>
                    <a href="#" class=" icon-close"></a>
                </div>
                <div>
                    <div class="parent">

                        <div class='header-menu-div'>
                            <ul class="list">
                                <li>
                                    <a class="new-board" href="#">
                                        Create Board…
                                            <span class="sub-name">
                                            A board is made up of cards ordered on lists. Use it to manage projects,
                                            track information, or organize anything.
                                            </span>

                                    </a>
                                </li>
                                <li>
                                    <a class="new-org" href="#">
                                        Create Team…
                                            <span class="sub-name">
                                            A team is a group of boards and people. Use it to organize your company,
                                             side hustle, family, or friends.
                                            </span>
                                    </a>
                                </li>
                                <li>
                                    <a class="new-org" href="#">
                                        Create Business Team…
                                          <span class="sub-name">
                                            With Business Class your team has more security, administrative controls,
                                             and unlimited Power-Ups.
                                           </span>

                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Headeraddmenu;
