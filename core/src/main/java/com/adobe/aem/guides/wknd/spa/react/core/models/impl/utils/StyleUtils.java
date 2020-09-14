/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2019 Adobe Systems Incorporated
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

package com.adobe.aem.guides.wknd.spa.react.core.models.impl.utils;


import com.adobe.aem.guides.wknd.spa.react.core.models.impl.HierarchyConstants;
import com.day.cq.wcm.api.designer.Style;
import com.drew.lang.annotations.NotNull;
import com.drew.lang.annotations.Nullable;

public class StyleUtils {

    private StyleUtils() {
    }

    /**
     * Returns the tree depth that can be configured in the policy. Defaults to 0
     *
     * @param style            Style to search in
     * @param pnStructureDepth Name of the structure depth attribute
     * @return The defined traversal depth or 0 if not defined
     */
    public static int getPageTreeDepth(Style style, String pnStructureDepth) {
        // Depth of the tree of pages
        Integer pageTreeTraversalDepth = getStructureDepth(style, pnStructureDepth);

        if (pageTreeTraversalDepth == null) {
            return 0;
        }

        return pageTreeTraversalDepth;
    }

    /**
     * Returns the style's structure depth attribute value
     *
     * @param style            Style to search in
     * @param pnStructureDepth Name of the structure depth attribute
     * @return Structure depth attribute value
     */
    @Nullable
    public static Integer getStructureDepth(Style style, String pnStructureDepth) {
        if (style != null) {
            return style.get(pnStructureDepth, Integer.class);
        }

        return null;
    }

    public static boolean isRootPage(@NotNull Style style) {
        return style.get(HierarchyConstants.PN_IS_ROOT, false);
    }
}
