{
  'targets': [
    {
      'target_name': 'NamedImage',
      'include_dirs': [ '<!(node -e "require(\'nan\')")' ],
      'sources': [
        'main.cc'
      ],
      'conditions': [
        ['OS=="mac"', {
          'xcode_settings': {
            'SDKROOT': 'macosx10.11'
          },
          'sources': [
            'named-image.mm',
          ],
          'link_settings': {
            'libraries': [
              '$(SDKROOT)/System/Library/Frameworks/AppKit.framework',
            ],
          }
        }]
      ],
    }
  ]
}
