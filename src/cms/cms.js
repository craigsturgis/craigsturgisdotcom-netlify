import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import PostPreview from './preview-templates/PostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('personal', AboutPagePreview)
CMS.registerPreviewTemplate('sitePlan', GenericPagePreview)
CMS.registerPreviewTemplate('affiliateLinks', GenericPagePreview)
CMS.registerPreviewTemplate('post', PostPreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)

