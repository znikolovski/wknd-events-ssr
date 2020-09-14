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

import './Page/Page';
import './ExperienceFragmentPage/ExperienceFragmentPage';
import './ExperienceFragment/ExperienceFragment';
import './Text/Text';
import './Image/Image';
import './Navigation/Navigation';
import './Header/Header';
import './Custom/Custom';
import './Card/Card';

/*
    Carousel imports
*/
import { MapTo } from '@adobe/aem-spa-component-mapping';
import * as SpaCoreComponents from "@adobe/aem-core-components-react-spa";
const {CarouselV1, CarouselV1IsEmptyFn} = SpaCoreComponents;
require('./Carousel/Carousel.css');
MapTo('wknd-spa-react/components/carousel')(CarouselV1, {isEmpty: CarouselV1IsEmptyFn});