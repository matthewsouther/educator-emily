import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ResourcesPagePreview from './preview-templates/ResourcesPagePreview'
import CoachingPagePreview from './preview-templates/CoachingPagePreview'
import TeachingPagePreview from './preview-templates/TeachingPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('resources', ResourcesPagePreview)
CMS.registerPreviewTemplate('coaching', CoachingPagePreview)
CMS.registerPreviewTemplate('teaching', TeachingPagePreview)
