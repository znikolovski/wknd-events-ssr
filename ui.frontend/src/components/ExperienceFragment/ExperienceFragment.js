/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

 import { MapTo } from '@adobe/aem-react-editable-components';
 import React, { Component } from 'react';
 import axios from 'axios';
 
 /**
  * Default Edit configuration for the Text component that interact with the Core Text component and sub-types
  *
  * @type EditConfig
  */
 const ExperienceFragmentEditConfig = {
    emptyLabel: 'Experience Fragment',

    isEmpty: function(props) {
        return !props || !props.localizedFragmentVariationPath || props.localizedFragmentVariationPath.trim().length < 1;
    }
 };
 
 /**
  * Text React component
  */
 class ExperienceFragment extends Component {
    constructor() {
        super();
        this.state = { content: [] };
    }

    async componentDidMount() {
        const content = await axios.get(this.props.localizedFragmentVariationPath.replace("/jcr:content", "") + '.nocloudconfigs.html?wcmmode=disabled');
        this.setState({ content: content.data });
    }
 
    render() {
        return (<div className="ExperienceFragment"
            dangerouslySetInnerHTML={{
            __html: this.state.content
            }}/>);
    }  
 }
 
 export default MapTo('wknd-spa-react/components/experiencefragment')(
    ExperienceFragment,
   ExperienceFragmentEditConfig
 );
 
